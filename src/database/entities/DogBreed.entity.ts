import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DogBreed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  pictureUrl: string;
}
