import {
  Module
} from '@nestjs/common'

import {
  PrismaService
} from '@inventory/db'

import {
  ItemsController
} from './items.controller'

import {
  ServicesModule
} from '../@services/services.module'

import {
  UsersController
} from './users.controller'

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

