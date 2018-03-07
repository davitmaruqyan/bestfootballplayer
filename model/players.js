const db = require('./db/index');
const sequelize = require('sequelize');

let players = db.define('player', {
	name: {
		type: sequelize.STRING,
		defaultValue: true
	},
	image: {
		type: sequelize.STRING,
		defaultValue: true
	},
	club: {
		type: sequelize.STRING,
		defaultValue: true
	},
	game_position: {
		type: sequelize.ENUM('FW','MF','QB','GK'),
		defaultValue: true
	},
	Placeofbirth: {
		type: sequelize.STRING,
		defaultValue: true
	},
	Dateofbirth: {
		type: sequelize.STRING,
		defaultValue: true
	},
	appraisal: {
		type: sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
		defaultValue: true
	},
	middle: {
		type: sequelize.INTEGER(10).UNSIGNED.ZEROFILL,
		defaultValue: true
	},
	biography: {
		type: sequelize.STRING,
		defaultValue: true
	}
}, {timestamps: false });

module.exports = players;
