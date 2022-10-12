import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Product } from '../products/product.model';
@Table
export class UserProduct extends Model {
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;
}
