import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {Observable} from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class PermissionGuard implements CanActivate {

        canActivate(context: ExecutionContext):  Promise<boolean>  {
        return new Promise<boolean>(async (reject, resolve) => {
            try {
                const request = context.switchToHttp().getRequest();
                let token: string = request.headers.authorization;
                token = token.split(' ')[1];
                console.log(token)

                try{
                    let res = await jwt.verify(token, 'secret12356789');
                    if (res) {
                        console.log(res);

                        resolve(true)
                    }
                }
                catch (e) {
                    console.log(e);
                }

            } catch (e) {
                reject(false)
            }
            // jwtService.verify<T extends object = any>(token: string, options?: VerifyOptions): T
            // console.log(isVerify);
        })
    }
}
