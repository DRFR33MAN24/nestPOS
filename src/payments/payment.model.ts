import { Column, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class User extends Model {
  @Column
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

  ///
  @HasMany(() => Payment)
  payments: Payment[];
}
