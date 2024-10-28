import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bookModule } from './Books/books.module';
import { UserModule } from './Users/users.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [bookModule, UserModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
