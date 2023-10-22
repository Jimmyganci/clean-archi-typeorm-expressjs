import { Column, Entity, Generated, ManyToOne } from "typeorm";
import { BaseEntity } from "@entities/BaseEntity";
import { User } from "./User";

@Entity()
export class Token extends BaseEntity {
  constructor(token?: Token) {
    super();
    Object.assign(this, token);
  }

  @Column({unique: true})
  website: string;

  @ManyToOne(type => User, user => user.tokens)
  userIdId: User;
}
