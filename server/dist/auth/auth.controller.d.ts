import { AuthService } from './auth.service';
import { AuthDto } from "./dto/auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            login: string;
        };
    }>;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            login: string;
        };
    }>;
    accessRoute(): Promise<{
        accessRoute: boolean;
    }>;
}
