import { model, Schema, Document } from 'mongoose';
import { IReminder } from '../interfaces/reminder.interface';

const reminderSchema: Schema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        
    },
    color: {
        type: String,
        
    }
});

const ReminderModel = model<IReminder>('Reminder', reminderSchema);

export default ReminderModel;