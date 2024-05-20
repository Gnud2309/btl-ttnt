const { Sequelize } = require("sequelize");
const DB_NAME ='web2024';
const DB_USERNAME = 'root';
const DB_PASSWORD = 'Yenmysql153@';
const DB_HOST = 'localhost'; 
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, { 
    host: DB_HOST || 'localhost',
    dialect: 'mysql', // or 'sqlite' | 'postgres' | 'mssql', ...
    logging: false
    // thêm các tùy chọn khác nếu cần thiết
}); 
module.exports = sequelize;