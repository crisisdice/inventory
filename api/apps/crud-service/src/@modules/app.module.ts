import {
  Module
} from '@nestjs/common'

import {
  LoggerModule
} from 'nestjs-pino'

import {
  PrismaModule
} from 'prisma-service'

import {
  ControllersModule
} from './controllers.module'

import {
  ServicesModule
} from './services.module'

import {
  ConfigModule,
} from '@nestjs/config'

/**/
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    LoggerModule.forRootAsync({
      useFactory: async () => {
        return {
          pinoHttp: {
          },
        }
      }
    }),
    ServicesModule,
    ControllersModule,
    PrismaModule,
  ],
  providers: [
  ],
})

export class AppModule {}

