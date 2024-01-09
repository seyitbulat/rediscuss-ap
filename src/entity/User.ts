import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, Length, IsOptional, IsPhoneNumber, IsStrongPassword } from 'class-validator';
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
  @Length(4, 24)
  username!: string;

  @AutoMap()
  @Column({ unique: true,length: 32 })
  @IsEmail()
  email!: string;

  @AutoMap()
  @Column({length: 24 })
  @Length(6, 24)
  password!: string;

  @AutoMap()
  @Column({ length: 32, nullable: true })
  @IsOptional()
  firstName?: string;

  @AutoMap()
  @Column({ length: 32, nullable: true })
  @IsOptional()
  lastName?: string;

  @AutoMap()
  @Column({ length: 32, nullable: true })
  @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;

  @OneToMany(() => Friendship, friendship  => friendship.user)
  friendships?: Friendship[];

  @OneToMany(() => UserRole, userRole => userRole.user)
  userRoles: UserRole[];
}
