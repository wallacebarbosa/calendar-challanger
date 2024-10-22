// calendarInitializer.ts
import CalendarUtils from '../../components/Calendar/utils/CalendarUtils';

export const initializeCalendarState = () => {
  const initializeCalendar = CalendarUtils.initializeCalendar();
  const { currentDay, currentMonth, currentYear } = initializeCalendar;
  
  return {
    currentDay,
    currentMonth,
    currentYear
  };
};
