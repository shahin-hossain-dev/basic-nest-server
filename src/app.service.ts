import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sayBye(): string {
    return 'Bye Bye';
  }

  newRoute() {
    return "I'm getting the server";
  }
}
