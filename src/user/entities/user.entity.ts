import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  names: string;
  @Column({ type: 'text' })
  email: string;
  @Column({ type: 'integer' })
  phone: number;
  @Column({ type: 'text' })
  password: string;
}
