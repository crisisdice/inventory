import { Injectable } from '@nestjs/common'
import { PrismaService } from '@inventory/db'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public async create(data: CreateUserDto) {
    return await this.prismaService.user.create({ data })
  }

  public async findAll() {
    return await this.prismaService.user.findMany()
  }

  public async findOne(id: number) {
    return await this.prismaService.user.findFirst({
      where: { id }
    })
  }

  public async update(id: number, data: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id }, data
    })
  }

  public async remove(id: number) {
    return await this.prismaService.user.delete({ where: { id } })
  }
}
