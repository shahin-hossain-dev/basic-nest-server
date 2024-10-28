import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { LoggerMiddleware } from 'src/logger.middleware';

@Module({
  imports: [UserModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
