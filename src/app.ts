import Fastify from 'fastify';

import { indexController } from './controller/index.controller';
import { exampleController } from './controller/example.controller';
import hook from './config/hook'

const app = Fastify({
    logger: false
});

app.register(hook);

app.register(indexController);
app.register(
    exampleController,
    {
        prefix: '/example'
    }
);

export default app;