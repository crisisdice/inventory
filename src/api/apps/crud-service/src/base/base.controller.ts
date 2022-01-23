import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe
} from '@nestjs/common'

import {
  BaseService
} from './base.service'

import {
  CreateType,
  UpdateType,
  ENDPOINT_BASE,
  ID
} from './config'

/**/
@Controller(ENDPOINT_BASE)
export class BaseController {
  constructor(
    private readonly baseService: BaseService,
  ) {}

  @Post()
  create(@Body() createData: CreateType) {
    return this.baseService.create(createData);
  }

  @Get()
  findAll() {
    return this.baseService.findAll();
  }

  @Get(ID)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.baseService.findOne(id);
  }

  @Put(ID)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateType) {
    return this.baseService.update(id, updateData);
  }

  @Delete(ID)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.baseService.remove(id);
  }
}
