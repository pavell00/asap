const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
	login: Sequelize.TEXT,
	password: Sequelize.TEXT
});

const Order = sequelize.define('orders', {
	title: Sequelize.STRING,
	order_date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	},
	user_id: {
		type: Sequelize.INTEGER,
		references: {
			model: User,
			key: 'id'
		}
	}
});

User.hasMany(Order, {foreignKey: 'user_id'});

module.exports = {
	User,
	Order
}
