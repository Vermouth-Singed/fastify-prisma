import { PrismaClient, Prisma } from '@prisma/client';

const logConfig: Prisma.LogLevel[] =
    process.env.PROFILE === 'dev'
        ? ['query', 'info', 'warn', 'error']
        : ['error'];

export const prisma = new PrismaClient({
    log: logConfig
});