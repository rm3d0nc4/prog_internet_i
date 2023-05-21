import express, { Application, NextFunction, Request, Response } from "express";
import { postRoutes } from "./routes/routes";
import errorMiddleware from "./core/middlewares/error_middleware";
import AppError from "./core/errors/app_error";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(postRoutes);

app.use(errorMiddleware);

const port: number = 3000;
app.listen(port, () => console.log(`Servidor inicializado em http://localhost:${port}`))

