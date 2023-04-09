import { Strategy } from 'passport-jwt';
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma.service";
import { User } from "@prisma/client";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate({ id }: Pick<User, 'id'>): Promise<User>;
}
export {};
