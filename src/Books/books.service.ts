import { Injectable } from '@nestjs/common';

@Injectable()
export class bookService {
  getBook(): string {
    return 'Get Books';
  }
  englishBooks(): object[] {
    return books;
  }
}

const books = [
  { name: 'English' },
  { name: 'English' },
  { name: 'English' },
  { name: 'English' },
  { name: 'English' },
  { name: 'English' },
  { name: 'English' },
];
