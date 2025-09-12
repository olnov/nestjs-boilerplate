import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {

    constructor (
        private readonly exampleService: ExampleService,
    ){}

    @Get()
    printExample(){
        return {
            message: 'This is an example message from controller',
        }
    }

    @Get('/service')
    printExampleFromService(){
        return this.exampleService.printExample();
    }
}
