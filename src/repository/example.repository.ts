import { prisma } from '../prisma/prisma';

import { ExampleRequestDto } from '../dto/example.request-dto';

export default class ExampleRepository {
    findMany() {
        return  prisma.example.findMany({
            select: {
                name: true,
                age: true,
                example2: {
                    select : {
                        name: true,
                        number: true
                    }
                }
            },
            where: {
                age: {
                    gte: 1,
                    lt: 10
                }
            },
            skip: 0,
            take: 10
        });
    }

    findUnique(name: string) {
        return  prisma.example.findUnique({
            where: {
                name
            }
        });
    }

    findFirst(name: string) {
        return  prisma.example.findFirst({
            where: {
                name
            }
        });
    }

    create(dto: ExampleRequestDto) {
        return prisma.example.create({
            data: {
                name: dto.name,
                age: dto.age
            }
        });
    }

    update(dto: ExampleRequestDto) {
        return prisma.example.update({
            where: {
                name: dto.name
            },
            data: {
                age: dto.age
            }
        });
    }

    upsert(dto: ExampleRequestDto) {
        return prisma.example.upsert({
            where: {
                name: dto.name
            },
            update: {
                age: dto.age
            },
            create: {
                name: dto.name,
                age: dto.age
            }
        });
    }

    delete(name: string) {
        return  prisma.example.delete({
            where: {
                name
            }
        });
    }
}
