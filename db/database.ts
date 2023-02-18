import { Sequelize } from 'sequelize';

// Change this values to make it adjust to your case
const dbName = 'your-database';     // MySQL database name
const user = 'root';                // Your username (default: root)
const password = '123456';          // Your password

const database = new Sequelize(dbName, user, password, {
    // You can setup your own database config here
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default database;