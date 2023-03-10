import express, { Application } from 'express';
import router from '../routes/user';
import cors from 'cors'

import database from '../db/database';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares()
        this.routes();
    }

    async dbConnection() {

        try {

            await database.authenticate();
            console.log('Database online');
            
        } catch (error: any) {
            throw new Error( error );
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Body reading
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.apiPaths.users, router);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port: ' + this.port);
            
        })
    }
}

export default Server;