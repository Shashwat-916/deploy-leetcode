import express from 'express';
import { prisma } from '@repo/prisma-db';
import redisClient from '@repo/redis-client';

const app = express();

app.listen(3002,()=>{
    console.log("Server Running on PORT : 3002")
})