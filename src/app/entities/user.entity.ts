import { ISystemUser } from '../definitions';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  ValidateNested,
} from '@nestjs/class-validator';
import { Exclude, Expose, Type } from '@nestjs/class-transformer';

export class UserData {
  @Expose()
  @IsString()
  phoneNumber: string;
}

export class UserEntity implements ISystemUser {
  constructor(data: Partial<UserEntity>) {
    Object.assign(this, data);
  }

  @Expose()
  @IsNumber()
  age: number;

  @Expose()
  @IsDateString()
  createdAt: Date;

  @Expose()
  @Type(() => UserData)
  @ValidateNested({ each: true })
  data: UserData;

  @Expose()
  @IsEmail()
  email: `${string}@${string}`;

  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsBoolean()
  isActive: boolean;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  role: string;

  @Exclude()
  type: 'premium' | 'base' | 'standard' | 'admin';
}
