import express from 'express';
import { prisma } from '@repo/prisma-db';
import redisClient from '@repo/redis-client';

const app = express();
app.use(express.json());


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});