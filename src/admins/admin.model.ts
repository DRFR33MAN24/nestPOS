import {
  Column,
  Model,
  Table,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';

@Table
export class Admin extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column({ defaultValue: true })
  active: boolean;

  @Column
  name: string;

  @Column
  profileImg: string;

  @Column
  password: string;
  @Column
  oauthSignIn: boolean;

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
}
