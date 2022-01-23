import {
  Controller,
} from '@nestjs/common'

import {
  CrudController
} from 'crud-controller'

import {
  ItemsService
} from '../@services'

/**/
@Controller('items')
export class ItemsController extends CrudController{
  constructor(
    private readonly itemsService: ItemsService
  ) {
    super(itemsService)
  }
}
