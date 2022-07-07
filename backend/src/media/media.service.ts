import { Injectable } from '@nestjs/common';
import { MediaType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  findMedia(title: string, type: MediaType) {
    return this.prisma.media.findMany({
      where: {
        title: {
          mode: 'insensitive',
          contains: title,
        },
        type,
      },
      include: {
        seasons: {
          include: {
            sources: true,
          },
        },
      },
    });
  }

  getMedia(id: number) {
    return this.prisma.media.findUnique({
      rejectOnNotFound: true,
      where: {
        id,
      },
      include: {
        seasons: {
          include: {
            sources: true,
          },
        },
      },
    });
  }
}
