import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as bodyParser from 'body-parser'
import { Logger } from 'nestjs-pino'


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  //const configService = app.get(ConfigService)
  //const port = configService.get<number>('PORT', { infer: true })
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  await app.listen(3000)
}
bootstrap();
