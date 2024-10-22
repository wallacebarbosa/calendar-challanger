import { Router } from "express";
import ReminderRoute from "./reminder.route";

const Routers = Router();

const reminderRoute = new ReminderRoute();

Routers.use('/sol', reminderRoute.router);

export default Routers;