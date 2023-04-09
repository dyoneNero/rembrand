import { PrismaService } from "../prisma.service";
import { AuthDto } from "./dto/auth.dto";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            login: string;
        };
    }>;
    private issueToken;
    private returnUserFields;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            login: string;
        };
    }>;
    private validateUser;
    accessRoute(): Promise<{
        accessRoute: boolean;
    }>;
}
