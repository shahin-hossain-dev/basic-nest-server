import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BottleService } from './bottle.service';
import { BottleController } from './bottle.controller';
import { LoggerMiddleware } from 'src/logger.middleware';

@Module({
  imports: [],
  providers: [BottleService],
  controllers: [BottleController],
})
export class BottleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('bottle');
  }
}
