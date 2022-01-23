import {
  PrismaService
} from 'prisma-service'

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
    PrismaService,
    ItemsService,
    UsersService,
  ],
  exports: [
    UsersService,
  ]
})

export class ServicesModule {}

