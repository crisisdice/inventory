import {
  Module
} from '@nestjs/common'

import {
  PrismaService
} from 'prisma-service'

import {
  ServicesModule
} from './services.module'

import {
  ItemsController,
  UsersController
} from './@controllers'

import {
  ItemsService,
  UsersService,
} from './@services'

/**/
@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    ItemsController,
    UsersController
  ],
  providers: [
    PrismaService,
    ItemsService,
    UsersService,
  ]
})

export class ControllersModule {}

