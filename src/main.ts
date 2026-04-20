import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from "node:process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT ?? 3000);
}
bootstrap().catch((err: unknown) => {
  console.log(`Error occurred while trying to start the server: ${err}`);
});
