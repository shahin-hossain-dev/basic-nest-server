import { Controller, Get } from '@nestjs/common';
import { bookService } from './books.service';

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
}
