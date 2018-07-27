const config = require('./config');
const Sequelize = require('sequelize');
//var sequelize = new Sequelize(config.dbConnectionString);


//dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
const sequelize = new Sequelize('employees', 'postgres', '223245', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

require('sequelize-values')(sequelize);
module.exports = sequelize;
