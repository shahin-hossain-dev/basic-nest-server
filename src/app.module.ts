import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bookModule } from './Books/books.module';
import { UserModule } from './Users/users.module';
import { BottleModule } from './Bottles/bottle.module';

@Module({
  imports: [bookModule, UserModule, BottleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
