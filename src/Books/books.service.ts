import { Injectable } from '@nestjs/common';

@Injectable()
export class bookService {
  getBook(): string {
    return 'Get Books';
  }
  englishBooks(): object[] {
    return books;
  }

  englishBookSingle(): object {
    return { name: 'get object by params' };
  }

  saveBook(data): object {
    return data;
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
