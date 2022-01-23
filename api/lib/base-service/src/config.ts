import { PrismaClient, Prisma, User, Item } from '@prisma/client'

//export type DelegateType = keyof typeof PrismaClient.prototype.user
//
export type DelegateType = PrismaClient['user'] | PrismaClient['item']

export type CreateArgs =  { data: CreateType }

export type FindByIdArgs = Prisma.ItemFindFirstArgs | Prisma.UserFindFirstArgs
export type UpdateByIdArgs = Prisma.ItemUpdateArgs | Prisma.UserUpdateArgs
export type DeleteByIdArgs = Prisma.ItemDeleteArgs | Prisma.UserDeleteArgs

export type CreateType = Prisma.UserCreateInput | Prisma.ItemCreateInput
export type UpdateType = Prisma.UserUpdateInput | Prisma.ItemCreateInput
export type ReturnType = User | Item

export const ENDPOINT_BASE = ''
export const ID = ':id'

export type CreateMethod = (args: CreateArgs) => Promise<ReturnType>
export type FindAllMethod = () => Promise<ReturnType[]>
export type FindByIdMethod = (args: FindByIdArgs) => Promise<ReturnType>
export type UpdateByIdMethod = (args: UpdateByIdArgs) => Promise<ReturnType>
export type DeleteByIdMethod = (args: DeleteByIdArgs) => Promise<ReturnType>

