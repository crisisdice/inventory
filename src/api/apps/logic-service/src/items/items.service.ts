import { Injectable, Logger } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from '@inventory/db'

@Injectable()
export class ItemsService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: Logger
  ) {
    this.logger = new Logger(ItemsService.name)
  }

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
