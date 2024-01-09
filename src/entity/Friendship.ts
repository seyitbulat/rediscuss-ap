import { Entity, PrimaryGeneratedColumn, Column , ManyToOne} from 'typeorm';
import { User } from './User'; // Adjust the import path as necessary

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  userId!: number;

  @Column()
  friendId!: number;

  @Column({ nullable: true })
  status?: number;

  @Column({ nullable: true })
  createdBy?: number;

  @Column({ nullable: true })
  updatedBy?: number;

  @Column({ nullable: true })
  deletedBy?: number;

  @Column({ type: 'datetime2', nullable: true })
  createdDate?: Date;

  @Column({ type: 'datetime2', nullable: true })
  updatedDate?: Date;

  @Column({ type: 'datetime2', nullable: true })
  deletedDate?: Date;

  @Column()
  isActive!: boolean;

  @ManyToOne(() => User, user => user.friendships)
  user?: User;
}
