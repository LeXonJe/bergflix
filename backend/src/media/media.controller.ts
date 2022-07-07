import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { Media, MediaType } from '@prisma/client';
import { FindMediaQueryDTO } from './dto/FindMediaQueryDTO';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Get()
  async findMedia(@Query() query: FindMediaQueryDTO) {
    return await this.mediaService.findMedia(query.title, query.type);
  }

  @Get('/featured')
  async getFeaturedMedia(@Query() query: FindMediaQueryDTO) {
    const media = await this.mediaService.findMedia(query.title, query.type);
    return media[Math.floor(Math.random() * media.length)];
  }

  @Get('/:id')
  async getMedia(@Param('id') id: number) {
    try {
      return await this.mediaService.getMedia(id);
    } catch (e) {
      return new HttpException(e.message, HttpStatus.NOT_FOUND);
    }
  }
}
