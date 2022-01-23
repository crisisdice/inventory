import { PrismaClient, Prisma } from '@prisma/client'

export type DelegateType = typeof PrismaClient.prototype.user
export type CreateType = Prisma.UserCreateInput
export type UpdateType = Prisma.UserUpdateInput

export const ENDPOINT_BASE = ''
export const ID = ':id'
