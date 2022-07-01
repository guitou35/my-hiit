const sequelize = require("../../db");
const {DataTypes} = require("sequelize");

const Muscle = sequelize.define('Muscle', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
})

async function syncro () {
    await sequelize.sync({ force: false });
    // Code here
};

syncro();

module.exports = Muscle;

