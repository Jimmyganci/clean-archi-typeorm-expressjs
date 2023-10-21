import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "@entities/BaseEntity";
import { Token } from "./Token";

@Entity()
export class User extends BaseEntity {
  constructor(user?: User) {
    super();
    Object.assign(this, user);
  }

  @Column({unique: true})
  company_name: string;

  @Column({unique: true})
  company_email: string;

  @Column({unique: true})
  manager_email: string;

  @Column()
  manager_lastname: string;

  @Column()
  manager_firstname: string;
  
  @Column({unique: true})
  manager_phone: string;

  @Column()
  password: string;

  @Column({default: 'user'})
  role?: string;

  @OneToMany(type => Token, token => token.user_id)
  tokens: Token[];

}
