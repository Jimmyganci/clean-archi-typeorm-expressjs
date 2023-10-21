import { User } from "@entities/User";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { Generated, ManyToOne } from "typeorm";

export class CreateTokenDTO {
  constructor(props: CreateTokenDTO) {
    Object.assign(this, props);
  }
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  website: string;

  @Generated('uuid')
  token: string

  @ManyToOne(type => User, user => user.tokens)
  user_id: User;
}
