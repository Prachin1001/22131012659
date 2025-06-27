const { createUrl, findByShortId } = require('../repository/urlRepository');
const crypto = require('crypto');

const generateShortId = () => {
  return crypto.randomBytes(4).toString('hex'); // 8-char shortId
};

const shortenUrl = async (originalUrl, expiresInMinutes = 60 * 24) => {
  const shortId = generateShortId();
  const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);
  const url = await createUrl(originalUrl, shortId, expiresAt);
  return url;
};

const getOriginalUrl = async (shortId) => {
  return await findByShortId(shortId);
};

module.exports = {
  shortenUrl,
  getOriginalUrl,
}; 