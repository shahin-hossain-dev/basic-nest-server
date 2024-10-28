import { Module } from '@nestjs/common';
import { bookController } from './books.controller';
import { bookService } from './books.service';

@Module({
  imports: [],
  controllers: [bookController],
  providers: [bookService],
})
export class bookModule {}
