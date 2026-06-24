import { FastifyInstance } from 'fastify';

export async function indexController(fastify: FastifyInstance) {
    fastify.get('/',
        async () => {
            return {
                success: true,
                message: 'fastify-prisma project'
            };
        }
    );
}