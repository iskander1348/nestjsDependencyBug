import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ModuleOne } from './modules/moduleOne/app.module';

@Module({
  imports: [ModuleOne],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
