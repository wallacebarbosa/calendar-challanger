import mongoose from "mongoose";
import ReminderModel from "../models/reminder.model";
import { IReminder } from "../interfaces/reminder.interface";
import e from "express";
import { ReminderDto } from "../dtos/reminder.dto";

class ReminderService {

    public reminders = ReminderModel

    public async createReminder(data: ReminderDto): Promise<IReminder> {
        try {
            const reminder = new ReminderModel(data);
            const newReminder = await reminder.save();
            return newReminder;
        } catch (error) {
            throw error;
        }
    }

    public async getReminder(reminderId: string): Promise<IReminder | null> {
        try {
            const reminder = await ReminderModel.findById(reminderId);
            return reminder;
        } catch (error) {
            throw error;
        }
    }

    public async getReminders(): Promise<IReminder[]> {
        try {
            const reminders = await ReminderModel.find().lean();
            console.log(reminders, "chegou aqui");
            return reminders;
        } catch (error) {   
            throw error;
        }
    }

    public async getReminderById(reminderId: string): Promise<IReminder | null> {

        try {
            const reminder = await ReminderModel.findById(reminderId);
            return reminder;
        } catch (error) {   
            throw error;
        }
        
    }

    public async updateReminder(reminderId: string, data: ReminderDto): Promise<IReminder | null> {
        try {
            const reminder = await ReminderModel.findByIdAndUpdate(reminderId, data);
            return reminder;
        } catch (error) {
            throw error;
        }

 
    }

    public async deleteReminder(reminderId: string): Promise<IReminder | null> {
        try {
            const reminder = await ReminderModel.findByIdAndDelete(reminderId);
            return reminder;
        }	catch (error) {	
            throw error;
        }

        
    }




}

export default ReminderService;