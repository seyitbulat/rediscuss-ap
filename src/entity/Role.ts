import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserRole } from './UserRole';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  name: string;

  // Other columns...
  userRoles: UserRole;
  
}