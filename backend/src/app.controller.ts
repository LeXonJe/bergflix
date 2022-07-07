import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): { msg: string } {
    return { msg: 'Welcome to the backend of Bergflix! :)' };
  }
}
