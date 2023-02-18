import { DataTypes } from 'sequelize';
import database from '../db/database';

const User = database.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
}, { paranoid: true }) // Remove paranoid for hard deletion

export default User;