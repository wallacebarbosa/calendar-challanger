import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import CardReminder from "./components/CardRemiderInfo/CardReminderInfo";
import Reminder from "./components/Reminder/Reminder";
import { GlobalStateProvider } from "./providers/CalendarProvider/CalendarStateContext";
import { ModalProvider } from "./providers/ModalProvider/ModalContext";

function App() {
  return (
    <GlobalStateProvider>
      <ModalProvider>
        <div className="container">
          <CardReminder id="CardReminder" />

          <Calendar />
          <Reminder id="Reminder" />
        </div>
      </ModalProvider>
    </GlobalStateProvider>
  );
}

export default App;
