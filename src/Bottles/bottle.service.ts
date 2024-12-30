import { Injectable } from '@nestjs/common';

@Injectable()
export class BottleService {
  getBottles(): string {
    return 'All Bottles';
  }

  saveBottles(data: string) {
    console.log(data);
    return data;
  }
}
