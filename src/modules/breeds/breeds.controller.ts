import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dtos/create-breed.dto';
import { UpdateBreedDto } from './dtos/update-breed.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  findAll(): Promise<DogBreed[]> {
    return this.breedsService.findAll();
  }

  @Get(':id')
  findById(@Param() params): Promise<DogBreed> {
    const { id } = params;

    return this.breedsService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateBreedDto) {
    this.breedsService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() { name, pictureUrl }: UpdateBreedDto,
  ) {
    this.breedsService.update(id, { name, pictureUrl });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.breedsService.delete(id);
  }
}
