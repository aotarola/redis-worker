'use strict';

module.exports = () => ({
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  DOWNLOAD_PATH: process.env.DOWNLOAD_PATH,
});