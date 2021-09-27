import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LangdexModule } from './repository/modules/langdex/crud/langdex.module';
import { AutomapperModule } from 'nestjsx-automapper';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AutomapperModule.withMapper(),
    LangdexModule]
})
export class AppModule {}
