import {
  CanActivate,
  ExecutionContext,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class UserIsUserGuard implements CanActivate {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const { headers } = request;
      const bodyUserId: number = request.body['userId'];
      const jwtToken: string = headers.authorization.split(' ')[1];
      const userIdFromToken: number = this.authService.getIdFromToken(jwtToken);
      return bodyUserId === userIdFromToken ? true : false;
    } catch (error) {
      return false;
    }
  }
}
