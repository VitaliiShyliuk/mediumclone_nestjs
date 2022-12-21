import { TagController } from '@app/tag/tag.controller';
import { TagEntity } from '@app/tag/tag.entity';
import { TagService } from '@app/tag/tag.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
