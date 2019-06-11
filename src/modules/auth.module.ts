
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../Services/auth.service';
import { JwtStrategy } from '../Srtategy/jwt.strategy';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [PassportModule, AuthService],
})
export class AuthModule {}