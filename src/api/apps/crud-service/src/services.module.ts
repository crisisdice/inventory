import {
  Module
} from '@nestjs/common'

import {
  ItemsService,
  UsersService,
} from './@services'

/**/
@Module({
  providers: [
    ItemsService,
    UsersService,
  ],
  exports: [
    UsersService,
  ]
})

export class ServicesModule {}

