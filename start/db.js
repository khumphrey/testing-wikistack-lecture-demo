const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/hippoapp',{
	logging: false
})

const Hippo = db.define('hippo', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	weight: {
		type: Sequelize.INTEGER,
		validate: {
			min: 0
		}
	},
	sleepyFactor: Sequelize.DECIMAL
})

Hippo.findPlumpest = function () {
	return this.findAll({
		where: {
			weight: { $gt: 3500 }
		}
	})
}

Hippo.prototype.move = function () {
	if (this.sleepyFactor < Math.random()) return "I should get going"
	else return "Maybe tomorrow"
}

module.exports = { db, Hippo }