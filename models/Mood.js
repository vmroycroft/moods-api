const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoodSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Mood = mongoose.model('mood', MoodSchema);
