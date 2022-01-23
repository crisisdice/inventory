import {
  Module
} from '@nestjs/common'

import {
  PrismaService
} from 'prisma-service'

import {
  ItemsController
} from './items.controller'

import {
  UsersController
} from './users.controller'

import {
  ServicesModule
} from '../@services/services.module'

import {
  ItemsService
} from '../@services/items.service'

import {
  UsersService
} from '../@services/users.service'

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

