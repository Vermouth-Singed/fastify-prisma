import dotenv from 'dotenv';

const profile = process.env.PROFILE || 'dev';

dotenv.config({
  path: `.env.${profile}`
});

import { decrypt } from "./src/config/crypto";

process.env.DATABASE_URL = decrypt(
    process.env.DATABASE_URL!
);