import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // Makes the configuration available globally
    envFilePath: '.env', // Path to the environment file
    cache: true, // Caches the configuration for performance
    expandVariables: true, // Expands environment variables in the config
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
