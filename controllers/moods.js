const Mood = require('../models/Mood');

exports.getMoods = async (req, res, next) => {
	try {
		const moods = await Mood.find();

		return res.status(200).json({
			success: true,
			data: moods
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

exports.addMood = async (req, res, next) => {
	try {
		const mood = await Mood.create(req.body);

		return res.status(201).json({
			success: true,
			data: mood
		});
	} catch (err) {
		console.error(err);
		if (err.code === 11000) {
			return res.status(400).json({ error: 'This mood already exists' });
		}
		res.status(500).json({ error: 'Server error' });
	}
};
