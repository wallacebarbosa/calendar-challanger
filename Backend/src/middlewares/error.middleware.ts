import { error } from "console";
import { Express, Response, Request, NextFunction} from "express";
interface Error {
    status?: number;
    message?: string;
}

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Algo de errado aconteceu';
    res.status(status).send({
        status,
        message
    });

    next();
};

export default errorMiddleware;