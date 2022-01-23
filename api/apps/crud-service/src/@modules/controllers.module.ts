import {
  Module
} from '@nestjs/common'

import {
  ItemsController,
  UsersController
} from '../@controllers'

import {
  ItemsService,
  UsersService,
} from '../@services'

/**/
@Module({
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

