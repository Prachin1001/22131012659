const { shortenUrl, getOriginalUrl } = require('../service/urlService');

const createShortUrl = async (req, res) => {
  const { originalUrl, expiresInMinutes } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'originalUrl is required' });
  }
  try {
    const url = await shortenUrl(originalUrl, expiresInMinutes);
    res.status(201).json({ shortId: url.shortId, shortUrl: `${req.protocol}://${req.get('host')}/${url.shortId}` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
};

const redirectToOriginal = async (req, res) => {
  const { shortId } = req.params;
  try {
    const url = await getOriginalUrl(shortId);
    if (!url || (url.expiresAt && url.expiresAt < new Date())) {
      return res.status(404).json({ error: 'URL not found or expired' });
    }
    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json({ error: 'Failed to redirect' });
  }
};

module.exports = {
  createShortUrl,
  redirectToOriginal,
}; 