import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Friendship } from './Friendship';
import { UserRole } from './UserRole';
import { AutoMap } from '@automapper/classes';

@Entity()
export class User {
  @AutoMap()
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @AutoMap()
  @Column({ unique: true ,length: 24 })
  username!: string;

  @AutoMap()
  @Column({ unique: true,length: 32 })
  email!: string;

  @AutoMap()
  @Column({length: 24 })
  password!: string;

  @AutoMap()
  @Column({ length: 32, nullable: true })
  firstName?: string;

  @AutoMap()
  @Column({ length: 32, nullable: true })
  lastName?: string;

  @AutoMap()
  @Column({ length: 32, nullable: true })
  phoneNumber?: string;

  @OneToMany(() => Friendship, friendship  => friendship.user)
  friendships?: Friendship[];

  @OneToMany(() => UserRole, userRole => userRole.user)
  userRoles: UserRole[];
}
