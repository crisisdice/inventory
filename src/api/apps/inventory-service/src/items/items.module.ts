import { Module, Logger } from '@nestjs/common'
import { ItemsService } from './items.service'
import { ItemsController } from './items.controller'
import { PrismaService } from '@inventory/db'

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService, Logger]
})
export class ItemsModule {}
