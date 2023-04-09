import {BadRequestException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { hash, verify } from 'argon2';
import { PrismaService } from "../prisma.service";
import {AuthDto} from "./dto/auth.dto";
import { JwtService } from '@nestjs/jwt'
import {User} from "@prisma/client";

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    async register(dto: AuthDto) {
        const oldUser = await this.prisma.user.findUnique({
            where: {
                login: dto.login
            }
        })

        if (oldUser) throw new BadRequestException("User already exists")

        const user = await this.prisma.user.create({
            data: {
                login: dto.login,
                password: await hash(dto.password)
            }
        })

        const tokens = await this.issueToken(user.id)

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    private async issueToken(userId: number) {
        const data = {id: userId}

        const accessToken = this.jwt.sign(data, {
            expiresIn: '15m'
        })

        return {accessToken}
    }

    private returnUserFields (user: User) {
        return {
            id: user.id,
            login: user.login
        }
    }

    async login (dto: AuthDto) {
        const user = await this.validateUser(dto)
        const tokens = await this.issueToken(user.id)

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    private async validateUser (dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                login: dto.login
            }
        })

        if (!user) throw new NotFoundException("User not found")

        const isValid = await verify(user.password, dto.password)

        if(!isValid) throw new UnauthorizedException('Invalid password')

        return user
    }

    async accessRoute() {
        const res = {
            accessRoute: true
        }

        return res
    }
}
