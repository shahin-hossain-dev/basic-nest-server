import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye')
  getBye(): string {
    return this.appService.sayBye();
  }

  @Get('new-route')
  newRoute() {
    return this.appService.newRoute();
  }
}
