import {
  Test,
  TestingModule
} from '@nestjs/testing'

import {
  PrismaService
} from 'prisma-service'

import {
  ItemsService
} from '../items.service'

describe('ItemsService', () => {
  let service: ItemsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PrismaService,
          useValue: {}
        },
        ItemsService
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
