import { Body, Controller, Get, Post } from '@nestjs/common';
import { BottleService } from './bottle.service';

@Controller('bottle')
export class BottleController {
  constructor(private readonly bottleService: BottleService) {}

  @Get('all-bottles')
  getBottle(): string {
    return this.bottleService.getBottles();
  }

  @Post('save')
  saveBottles(@Body() body: string) {
    console.log(body);
    return this.bottleService.saveBottles(body);
  }
}
