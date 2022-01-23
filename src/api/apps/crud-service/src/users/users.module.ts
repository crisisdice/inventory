import { Module, Logger } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { PrismaService } from '@inventory/db'

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, Logger]
})
export class UsersModule {}
