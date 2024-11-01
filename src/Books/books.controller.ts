import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { bookService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('book')
export class bookController {
  constructor(private readonly bookService: bookService) {}

  @Get('/books')
  getBook(): string {
    return this.bookService.getBook();
  }

  @Get('english-books')
  englishBooks(): object[] {
    return this.bookService.englishBooks();
  }

  // get value from param with @Param decorator
  @Get('english-books/:params')
  englishBookSingle(@Param() params: object): object {
    // console.log(params);
    return this.bookService.englishBookSingle();
  }

  @Post('save')
  //এখানে controller validation করা হয়েছে।
  //saveBook(@Body(new ValidationPipe()) body: CreateBookDto) {
  saveBook(@Body() body: CreateBookDto) {
    return this.bookService.saveBook(body);
  }
}
