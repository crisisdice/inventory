import {
  Module
} from '@nestjs/common'

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
    ItemsService,
    UsersService,
  ]
})

export class ControllersModule {}

