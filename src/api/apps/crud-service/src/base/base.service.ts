import {
  Injectable
} from '@nestjs/common'

import {
  DelegateType,
  CreateType,
  UpdateType
} from './config'

@Injectable()
export class BaseService {
  constructor(
    private delegate: DelegateType
  ) {}

  public async create(data: CreateType) {
    return await this.delegate.create({ data })
  }

  public async findAll() {
    return await this.delegate.findMany()
  }

  public async findOne(id: number) {
    return await this.delegate.findFirst({ where: { id } })
  }

  public async update(id: number, data: UpdateType) {
    return await this.delegate.update({ where: { id }, data })
  }

  public async remove(id: number) {
    return await this.delegate.delete({ where: { id } })
  }
}

