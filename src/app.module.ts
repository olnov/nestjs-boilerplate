import { Module } from '@nestjs/common';
import { LoggerModule } from 'pino-nestjs';
import pino from 'pino';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    ExampleModule,
    LoggerModule.forRoot({
      pinoHttp: {
        stream: pino.destination ({
          sync: false,
        }),
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
