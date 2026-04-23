const redisUrl = process.env.REDIS_URL;

export const redisConnection = redisUrl
  ? redisUrl
  : {
      host: process.env.REDIS_HOST ?? "127.0.0.1",
      port: Number(process.env.REDIS_PORT ?? 6379),
    };
