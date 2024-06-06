/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumUserRoleRoleType } from "./EnumUserRoleRoleType";
import { IsEnum, IsOptional } from "class-validator";
import { EnumUserRoleUserRoleType } from "./EnumUserRoleUserRoleType";

@InputType()
class UserRoleCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumUserRoleRoleType,
  })
  @IsEnum(EnumUserRoleRoleType)
  @IsOptional()
  @Field(() => EnumUserRoleRoleType, {
    nullable: true,
  })
  roleType?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumUserRoleUserRoleType,
  })
  @IsEnum(EnumUserRoleUserRoleType)
  @IsOptional()
  @Field(() => EnumUserRoleUserRoleType, {
    nullable: true,
  })
  userRoleType?: "Option1" | null;
}

export { UserRoleCreateInput as UserRoleCreateInput };
