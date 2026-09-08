import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';
import { ExampleModule } from './modules/example/example.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ExampleModule,
    LoggerModule.forRoot({
      pinoHttp: {
        stream: pino.destination({
          sync: false,
        }),
      },
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
