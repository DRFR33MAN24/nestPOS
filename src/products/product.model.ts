import {
  Column,
  Model,
  Table,
  BelongsToMany,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
  AutoIncrement,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { UserProduct } from '../sharedModels/UserProduct.model';
@Table({
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column
  name: string;
  @Column
  description: string;

  @Column
  quantity: number;

  @Column
  date: Date;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  ///
  @BelongsToMany(() => User, () => UserProduct)
  users: User[];
}
