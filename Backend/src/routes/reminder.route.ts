import { Router } from "express";
import ReminderController from './../controllers/reminder.cotroller';

class ReminderRoute {

    public path = '/reminders';
    public router = Router();
    public ReminderController = new ReminderController();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path, this.ReminderController.getReminders);
        this.router.post(this.path, this.ReminderController.createReminder);
        this.router.get(`${this.path}/:id`, this.ReminderController.getReminder);
        this.router.put(`${this.path}/:id`, this.ReminderController.updateReminder);
        this.router.delete(`${this.path}/:id`, this.ReminderController.deleteReminder);
    }
}

export default ReminderRoute;