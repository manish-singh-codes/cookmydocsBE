import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Application is running on: ${process.env.PORT ?? 3000}`);
  await app.listen(process.env.PORT ?? 3000);

  app.enableCors({
    origin: process.env.ALLOWED_URL,
    withCredentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })

}
bootstrap();
