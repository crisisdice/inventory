import {
  NestFactory
} from '@nestjs/core'

import {
  ConfigService
} from '@nestjs/config'

import * 
  as bodyParser
from 'body-parser'

import {
  Logger
} from 'nestjs-pino'

import {
  AppModule
} from './app.module'

/**/
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })

  app.useLogger(app.get(Logger))
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  // TODO
  //const configService = app.get(ConfigService)
  //const port = configService.get<number>('PORT', { infer: true })

  await app.listen(3000)
}

bootstrap()

