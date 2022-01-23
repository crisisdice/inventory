import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ItemsModule } from './items/items.module'
import { LoggerModule } from 'nestjs-pino'

@Module({
})

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
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
