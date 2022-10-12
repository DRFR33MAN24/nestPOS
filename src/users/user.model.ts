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
import { Product } from 'src/products/product.model';
import { UserProduct } from 'src/sharedModels/UserProduct.model';
import { Payment } from '../payments/payment.model';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column({ defaultValue: true })
  active: boolean;

  @Column
  name: string;

  @Column
  country: string;

  @Column
  dateOfBirth: Date;

  @Column
  balance: number;
  @Column
  notificationToken: string;

  @Column
  profileImg: string;
  @Column
  paypalMail: string;
  @Column
  cryptoWallet: string;
  @Column
  password: string;
  @Column
  oauthSignIn: boolean;

  @Column
  registerDate: Date;

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
  @HasMany(() => Payment)
  payments: Payment[];

  @BelongsToMany(() => Product, () => UserProduct)
  products: Product[];
}
