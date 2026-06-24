import { FastifyInstance } from 'fastify';

import { ExampleService } from '../service/example.service';
import { ExampleRequestDto } from '../dto/example.request-dto';
// import { getKstTime } from '../util/time.util';

const exampleService: ExampleService = new ExampleService();

export function exampleController(fastify: FastifyInstance) {
    // fastify.addHook('preSerialization', async (request, reply, payload) => {
    //     return {
    //         success: true,
    //         data: payload,
    //         timestamp: getKstTime()
    //     };
    // });

    fastify.get('/',
        () => {
            return exampleService.findMany();
        }
    );

    fastify.get('/unique/:name',
        (request) => {
            const { name } = request.params as {
                name: string;
            };

            return exampleService.findUnique(name);
        }
    );

    fastify.get('/first/:name',
        (request) => {
            const { name } = request.params as {
                name: string;
            };

            return exampleService.findFirst(name);
        }
    );

    fastify.post('/', (request) => {
        const body = request.body as ExampleRequestDto;

        return exampleService.create(body);
    });

    fastify.put('/', (request) => {
        const body = request.body as ExampleRequestDto;

        return exampleService.update(body);
    });

    fastify.patch('/', (request) => {
        const body = request.body as ExampleRequestDto;

        return exampleService.upsert(body);
    });

    fastify.delete('/:name', (request) => {
        const { name } = request.params as {
            name: string;
        };

        return exampleService.delete(name);
    });
}