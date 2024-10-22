import { Express, Response, Request, NextFunction } from "express";
import { error } from 'console';

const notFindMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const message = 'Endpoint não encontrado';
    const error = new Error(message);
    res.status(404).send({
        message
    });

    next();
}