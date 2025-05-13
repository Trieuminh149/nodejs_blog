const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/', SiteController.home);
router.get('/search', newsController.search);
router.get('/chat', newsController.chat);

module.exports = router;
