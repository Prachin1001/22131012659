const Url = require('../domain/url');

const createUrl = async (originalUrl, shortId, expiresAt) => {
  const url = new Url({ originalUrl, shortId, expiresAt });
  return await url.save();
};

const findByShortId = async (shortId) => {
  return await Url.findOne({ shortId });
};

const deleteByShortId = async (shortId) => {
  return await Url.deleteOne({ shortId });
};

const deleteExpired = async () => {
  return await Url.deleteMany({ expiresAt: { $lte: new Date() } });
};

module.exports = {
  createUrl,
  findByShortId,
  deleteByShortId,
  deleteExpired,
}; 