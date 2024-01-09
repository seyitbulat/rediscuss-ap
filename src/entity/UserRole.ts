import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User'; // Adjust the import path as necessary
import { Role } from './Role'; // Adjust the import path as necessary

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  roleId: number;

  @Column()
  userId: number;

  // ...remaining columns as previously defined

  @ManyToOne(() => User, user => user.userRoles)
  user: User;

  @ManyToOne(() => Role, role => role.userRoles)
  role: Role;
}
