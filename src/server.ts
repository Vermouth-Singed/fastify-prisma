import './config/env';

import { decrypt } from './config/crypto';
process.env.DATABASE_URL = decrypt(process.env.DATABASE_URL);

import app from './app';

const start = async () => {
    try {
        await app.listen({
            port: 3000,
            host: '0.0.0.0'
        });

        console.log('server start');
    } catch (err) {
        app.log.error(err);

        process.exit(1);
    }
};

start();
