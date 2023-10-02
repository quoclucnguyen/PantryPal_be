import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';

export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column({ name: 'username', unique: true })
  username: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: USER_ROLE,
    default: USER_ROLE.USER,
    name: 'role',
  })
  role: USER_ROLE;

  @Column({ name: 'name' })
  name: string;
}
