import express, { Application} from 'express';
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import IndexRoute from './routes/index';
import errorMiddleware from './middlewares/error.middleware';
import { dbconnection } from './database/mongodb.database';
import Routers from './routes';
import { Routes } from './interfaces/router.interface';

class App {
    public app: Application;

    constructor(routes: Routes[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
        this.connectToTheDatabase();
    }

    private initializeMiddlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));


      }

      private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
          this.app.use('/', route.router);
        });
      }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private async connectToTheDatabase() {
        try {
            // Connect to the database
            await dbconnection();

        } catch (error) {
            console.log("Error connecting to database", error);
            process.exit(1);
        }
    }

    public listen(PORT: number) {
        this.app.listen(PORT, () => {
            console.log(`App listening on the port ${PORT}`);
        });
    }
}

export default App;