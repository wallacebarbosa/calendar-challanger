// src/server.ts
import App from "./app";
import dotenv from "dotenv";
import ReminderRoute from "./routes/reminder.route";

// Carregar variáveis de ambiente
dotenv.config();

const app = new App([new ReminderRoute()]);

const PORT = 3001;

app.listen(PORT);
