import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ItemsModule } from './items/items.module'
import { LoggerModule } from 'nestjs-pino'
import {UsersModule} from './users/users.module'

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
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
