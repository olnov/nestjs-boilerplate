import { Controller, Get, UseGuards } from '@nestjs/common';
import { ExampleService } from './example.service';
import { RouteConfig } from '@nestjs/platform-fastify';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  @RouteConfig({
    rateLimit: {
      max: 100,
      timeWindow: '1 minute',
    }
  })
  printExample() {
    return {
      message: 'This is an example message from controller',
    };
  }

  @Get('/service')
  printExampleFromService() {
    return this.exampleService.printExample();
  }
}
