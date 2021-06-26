const express = require('express');
const { getMoods, addMood } = require('../controllers/moods');

const router = express.Router();

router.route('/').get(getMoods).post(addMood);

module.exports = router;
