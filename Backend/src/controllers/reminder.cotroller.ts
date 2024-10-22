import {IReminder} from '../interfaces/reminder.interface';
import {model, Schema, Document} from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import ReminderService from '../services/reminder.service';
import { ReminderDto } from '../dtos/reminder.dto';
import { create } from './../../node_modules/@types/whatwg-url/lib/URLSearchParams.d';

class ReminderController {
    public SReminder = new ReminderService();

    constructor() {
        this.getReminder = this.getReminder.bind(this);
        this.getReminders = this.getReminders.bind(this);
        this.createReminder = this.createReminder.bind(this);
        this.updateReminder = this.updateReminder.bind(this);
        this.deleteReminder = this.deleteReminder.bind(this);
    }

    public async getReminder(req: Request, res: Response, next: NextFunction) {
        try {
            const reminder = await this.SReminder.getReminder(req.params.id);
            res.status(200).json(reminder);
        } catch (error) {   
            next(error);
        }
       
    }

    public async getReminders(req: Request, res: Response, next: NextFunction) {
        try {
            const reminders = await this.SReminder.getReminders();
            res.status(200).json(reminders);
        } catch (error) {   
            next(error);
        }
     
    }

    public async createReminder(req: Request, res: Response, next: NextFunction) {
        try {
            const reminderData: ReminderDto = req.body;
            const createdReminder = await this.SReminder.createReminder(reminderData);
            res.status(201).json(createdReminder);
        } catch (error) {
            next(error);
        }

    }

    public async updateReminder(req: Request, res: Response, next: NextFunction) {
        try {
            const reminderId = req.params.id;
            const reminderData: ReminderDto = req.body;
            const updatedReminder = await this.SReminder.updateReminder(reminderId, reminderData);
            res.status(200).json(updatedReminder);
        } catch (error) {
            next(error);
        }
    }

    public async deleteReminder(req: Request, res: Response, next: NextFunction) {
        try {
            const reminderId = req.params.id;
            const deletedReminder = await this.SReminder.deleteReminder(reminderId);
            res.status(200).json(deletedReminder);
        } catch (error) {
            next(error);
        }
        
    }
}

export default ReminderController;
