import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dtos/create-breed.dto';
import { UpdateBreedDto } from './dtos/update-breed.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private breedRepository: Repository<DogBreed>,
  ) {}

  findAll(): Promise<DogBreed[]> {
    return this.breedRepository.find();
  }

  findById(id: string): Promise<DogBreed> {
    return this.breedRepository.findOne(id);
  }

  create(dto: CreateBreedDto) {
    this.breedRepository.insert({ name: dto.name, pictureUrl: dto.pictureUrl });
  }

  update(id: string, { name, pictureUrl }: UpdateBreedDto) {
    this.breedRepository.update(id, { name, pictureUrl });
  }

  delete(id: string) {
    this.breedRepository.delete(id);
  }
}
