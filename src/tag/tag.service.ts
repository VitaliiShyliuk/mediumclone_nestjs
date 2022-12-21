import { TagEntity } from '@app/tag/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}
  public async findAll(): Promise<TagEntity[]> {
    const tags = await this.tagRepository.find();
    return tags;
  }
}
