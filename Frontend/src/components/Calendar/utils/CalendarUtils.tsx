

// essa classe deve ter um metodo que inicializa o calendario

class CalendarUtils {

    static initializeCalendar() {
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        const previousMonth = new Date(currentYear, currentMonth - 1, 1);
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        return {
            currentDay,
            currentMonth,
            currentYear,
            previousMonth,
            nextMonth,
            daysInMonth,
        };
    }

    static getNewMonth(currentMonth: number, currentYear: number, direction: string) {
        let newMonth;
        let newYear;

        if (direction === "next") {
            newMonth = currentMonth + 1;
            newYear = currentYear;
        } else {
            newMonth = currentMonth - 1;
            newYear = currentYear;
        }

        if (newMonth === 12) {
            newMonth = 0;
            newYear = currentYear + 1;
        }

        if (newMonth === -1) {
            newMonth = 11;
            newYear = currentYear - 1;
        }

        return { newMonth, newYear };
    }

    static getDaysInMonth(month: number, year: number) {
        return new Date(year, month + 1, 0).getDate();
    }

    static getFirstDayOfMonth(month: number, year: number) {
        return new Date(year, month, 1).getDay();
    }

    static	getLastDayOfMonth(month: number, year: number) {
        return new Date(year, month + 1, 0).getDay();
    }

    static getDaysInPreviousMonth(month: number, year: number) {
        return new Date(year, month, 0).getDate();
    }

    static getDaysInNextMonth(month: number, year: number) {
        return new Date(year, month + 2, 0).getDate();
    }

    static getMonthName(month: number) {
        const monthNames = [ "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ];

        return monthNames[month];
    }

    static getYear(year: number) {
        return `${year}`;
    }

    static getCurrentDay() {
        return new Date().getDate();
    }


}

export default CalendarUtils;
