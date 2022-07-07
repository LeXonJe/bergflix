import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const mediaData: Prisma.MediaCreateInput[] = [
  {
    title: 'Captain Pineapple',
    description:
      'Bergmann hat Paluten und Sturmwaffel ein unvergessliches Weihnachtsfest versprochen. Blöd nur, dass er einen Tag vor Weihnachten realisiert, dass er rein gar nichts vorbereitet hat. Es beginnt eine wahnwitzige Reise quer durch Pineapple Bay, um Weihnachten wieder einmal in letzter Sekunde zu retten. Wäre da doch nur nicht diese verdammte Ananas...',
    type: 'SERIES',
    genre: 'Krimikomödie',
    ageRestricted: 16,
    logo: '/media/captainpineapple/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Staffel 1',
        sources: {
          createMany: {
            data: [
              {
                title: 'Die Bombe ist scharf!',
                description: '',
                thumbnail:
                  'https://i3.ytimg.com/vi/G4dkLMj6GRQ/maxresdefault.jpg',
                path: 'https://www.youtube.com/watch?v=G4dkLMj6GRQ',
              },
              {
                title: 'Die Verwechslung',
                description: '',
                thumbnail:
                  'https://i3.ytimg.com/vi/1pcHVOSKRJM/maxresdefault.jpg',
                path: 'https://www.youtube.com/watch?v=1pcHVOSKRJM',
              },
            ],
          },
        },
      },
    },
  },
  {
    title: 'Bergwars',
    description: 'Bergwars Beschreibung',
    type: 'MOVIE',
    genre: 'Sci-Fi',
    ageRestricted: 16,
    logo: '/media/bergwars/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Film',
        sources: {
          create: {
            title: 'Bergwars',
            description: '',
            thumbnail: 'https://i3.ytimg.com/vi/HULrwuZlgZM/maxresdefault.jpg',
            path: 'https://www.youtube.com/watch?v=HULrwuZlgZM',
          },
        },
      },
    },
  },
  {
    title: 'Bergwars',
    description: 'Bergwars Beschreibung',
    type: 'MOVIE',
    genre: 'Sci-Fi',
    ageRestricted: 16,
    logo: '/media/bergwars/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Film',
        sources: {
          create: {
            title: 'Bergwars',
            description: '',
            thumbnail: 'https://i3.ytimg.com/vi/HULrwuZlgZM/maxresdefault.jpg',
            path: 'https://www.youtube.com/watch?v=HULrwuZlgZM',
          },
        },
      },
    },
  },
  {
    title: 'Bergwars',
    description: 'Bergwars Beschreibung',
    type: 'MOVIE',
    genre: 'Sci-Fi',
    ageRestricted: 16,
    logo: '/media/bergwars/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Film',
        sources: {
          create: {
            title: 'Bergwars',
            description: '',
            thumbnail: 'https://i3.ytimg.com/vi/HULrwuZlgZM/maxresdefault.jpg',
            path: 'https://www.youtube.com/watch?v=HULrwuZlgZM',
          },
        },
      },
    },
  },
  {
    title: 'Bergwars',
    description: 'Bergwars Beschreibung',
    type: 'MOVIE',
    genre: 'Sci-Fi',
    ageRestricted: 16,
    logo: '/media/bergwars/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Film',
        sources: {
          create: {
            title: 'Bergwars',
            description: '',
            thumbnail: 'https://i3.ytimg.com/vi/HULrwuZlgZM/maxresdefault.jpg',
            path: 'https://www.youtube.com/watch?v=HULrwuZlgZM',
          },
        },
      },
    },
  },
  {
    title: 'Bergwars',
    description: 'Bergwars Beschreibung',
    type: 'MOVIE',
    genre: 'Sci-Fi',
    ageRestricted: 16,
    logo: '/media/bergwars/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Film',
        sources: {
          create: {
            title: 'Bergwars',
            description: '',
            thumbnail: 'https://i3.ytimg.com/vi/HULrwuZlgZM/maxresdefault.jpg',
            path: 'https://www.youtube.com/watch?v=HULrwuZlgZM',
          },
        },
      },
    },
  },
  {
    title: 'Bergwars',
    description: 'Bergwars Beschreibung',
    type: 'MOVIE',
    genre: 'Sci-Fi',
    ageRestricted: 16,
    logo: '/media/bergwars/logo.png',
    preview: '',
    releasedAt: new Date(2020, 12, 1),
    seasons: {
      create: {
        title: 'Film',
        sources: {
          create: {
            title: 'Bergwars',
            description: '',
            thumbnail: 'https://i3.ytimg.com/vi/HULrwuZlgZM/maxresdefault.jpg',
            path: 'https://www.youtube.com/watch?v=HULrwuZlgZM',
          },
        },
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const media of mediaData) {
    const mediaDb = await prisma.media.create({
      data: media,
    });
    console.log(`Created media with id: ${mediaDb.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
