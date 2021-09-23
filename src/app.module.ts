import { Module } from '@nestjs/common';
import { LangdexController } from './repository/modules/langdex/crud/langdex.controller';
import { LangdexService } from './repository/modules/langdex/crud/langdex.service';

@Module({
  imports: [],
  controllers: [LangdexController],
  providers: [LangdexService],
})
export class AppModule {}
