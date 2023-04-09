import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {User} from "@prisma/client";

export const CurrentUser = createParamDecorator(
    (data: keyof User, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        const user = request.User

        return data ? user[data] : user
    }
)