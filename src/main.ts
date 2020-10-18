import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigin = ['http://myapponly.com', ''];
  app.enableCors({
    origin: function(origin, callback)  {
      if(!origin) return callback(null,true);
      if(allowedOrigin.indexOf(origin) === -1){
        const msg = 'You are not allowed to access my resources';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  });
  await app.listen(3000);
}
bootstrap();
