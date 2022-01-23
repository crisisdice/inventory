import {
  PrismaClient,
  Prisma
} from '@prisma/client'

export type DelegateType = typeof PrismaClient.prototype.item
export type CreateType = Prisma.ItemCreateInput
export type UpdateType = Prisma.ItemUpdateInput

export const ENDPOINT_BASE = 'items'
export const ID = ':id'
