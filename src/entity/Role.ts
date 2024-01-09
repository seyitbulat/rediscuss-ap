import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Length } from 'class-validator';
import { UserRole } from './UserRole';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  @Length(1, 50)
  name: string;

  // Other columns...
  userRoles: UserRole;
  
}