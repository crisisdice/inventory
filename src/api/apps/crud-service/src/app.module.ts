import {
  Module
} from '@nestjs/common'

import {
  LoggerModule
} from 'nestjs-pino'

import {
  ControllersModule
} from './controllers.module'

import {
  ServicesModule
} from './services.module'

//TODO import { ConfigModule, ConfigService } from '@nestjs/config'

/**/
@Module({
  imports: [
    LoggerModule.forRootAsync({
      useFactory: async () => {
        return {
          pinoHttp: {
          },
        };
      }
    }),
    ServicesModule,
    ControllersModule,
  ],
  providers: [],
})

export class AppModule {}

