const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { getAllCategories, getAllStories } = require('../controllers');

router.get('/categories', getAllCategories);
router.get('/stories', getAllStories);

module.exports = router;