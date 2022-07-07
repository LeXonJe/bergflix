import { MediaType } from '@prisma/client';
import { Transform } from 'class-transformer';
import {
  IsEmpty,
  IsEnum,
  isNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class FindMediaQueryDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  @Transform((name) => (name.value as string).toUpperCase())
  @IsEnum(MediaType)
  type: MediaType;
}
