const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 * 60 }); // 1 hour default TTL

const setCache = (shortId, originalUrl, ttl) => {
  cache.set(shortId, originalUrl, ttl);
};

const getCache = (shortId) => {
  return cache.get(shortId);
};

const delCache = (shortId) => {
  cache.del(shortId);
};

module.exports = {
  setCache,
  getCache,
  delCache,
}; 