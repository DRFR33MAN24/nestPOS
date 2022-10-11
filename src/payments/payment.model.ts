import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
})
export class Payment extends Model {
  @Column
  id: number;

  @Column
  name: string;

  @Column
  amount: number;
  @Column
  notificationToken: string;

  @Column
  status: string;

  @Column
  date: Date;

  ///
  @BelongsTo(() => User)
  user: User;
}
