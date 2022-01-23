import {
  PrismaService
} from 'prisma-service'

import {
  Module
} from '@nestjs/common'

import {
  ItemsService
} from './items.service'

import {
  UsersService
} from './users.service'

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

