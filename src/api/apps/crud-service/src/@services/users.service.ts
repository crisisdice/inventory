import {
  PrismaService
} from '@inventory/db'

import {
  Injectable
} from '@nestjs/common'

import {
  BaseService
} from './base.service'

@Injectable()
export class UsersService extends BaseService {
  constructor(
    private readonly prisma: PrismaService
  ) {
    super(prisma.user)
  }
}

