import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { getKstTime } from '../util/time.util';

const responseFormatter: FastifyPluginAsync = async (fastify) => {
    fastify.addHook('preSerialization', async (request, reply, payload) => {
        return {
            success: true,
            data: payload,
            timestamp: getKstTime()
        };
    });
};

export default fp(responseFormatter);