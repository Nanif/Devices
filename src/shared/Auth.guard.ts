import {Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus} from '@nestjs/common';
import {Observable} from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): Promise<boolean> | boolean {
        const request = context.switchToHttp().getRequest();
        this.validToken(request.headers.authorization)
        return this.validateRequest(request);
    }

    validateRequest(req: any): boolean {
        return false
    }

    private validToken(authorization: any) {

        if (authorization.split(' ')[0] !== 'Bearer') {
            throw new HttpException('autorization failed', HttpStatus.FORBIDDEN);
        }

        const token = authorization.split(' ')[1];
        try {
            
        const decode = jwt.verify(token, process.env.SECRET)
        }
        catch (e) {
            throw new HttpException('autorization2 failed', HttpStatus.FORBIDDEN )
        }
    }
}