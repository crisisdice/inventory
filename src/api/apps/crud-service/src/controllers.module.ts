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
  ItemsController
} from './@controllers/items.controller'

import {
  UsersController
} from './@controllers/users.controller'

import {
  ItemsService
} from './@services/items.service'

import {
  UsersService
} from './@services/users.service'

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

