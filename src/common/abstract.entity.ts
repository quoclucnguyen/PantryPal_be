import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export class AbstractEntity {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: string;
}
