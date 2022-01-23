import {
  PrismaService
} from 'prisma-service'

import {
  Module
} from '@nestjs/common'

import {
  ItemsService
} from './@services/items.service'

import {
  UsersService
} from './@services/users.service'

/**/
@Module({
  providers: [
    PrismaService,
    ItemsService,
    UsersService,
  ],
  exports: [
    UsersService,
  ]
})

export class ServicesModule {}

