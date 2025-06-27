const express = require('express');
const router = express.Router();
const { createShortUrl, redirectToOriginal } = require('../handler/urlHandler');

router.post('/shorten', createShortUrl);
router.get('/:shortId', redirectToOriginal);

module.exports = router; 