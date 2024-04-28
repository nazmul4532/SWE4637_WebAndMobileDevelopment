'use strict';

class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
        this.currentDate = new Date();
        this.render(this.currentDate);
    }

    renderHeader(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `<div class="month-header">
              <button onclick="DatePicker.instances['${this.id}'].prevMonth()">&lt;</button>
              <div class="title">${month} ${year}</div>
              <button onclick="DatePicker.instances['${this.id}'].nextMonth()">&gt;</button>
            </div>`;
    }

    renderDaysHeader() {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const headerRow = days.map(day => `<div>${day}</div>`).join('');
        return `<div class="days-header">${headerRow}</div>`;
    }

    renderDays(date) {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        console.log(firstDay);
        console.log(lastDay);
        let calendarDays = '';
        let dayCounter = 1;
        let nextMonthDate = 1;
        let prevMonthDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

        const totalDays = lastDay + firstDay;
        const weeks = Math.ceil(totalDays / 7);

        console.log("Prev Month Date")
        console.log(prevMonthDate)
        for (let i = 0; i < weeks; i++) {
            let row = '';
            for (let j = 0; j < 7; j++) {
                if (dayCounter > lastDay) {
                    const dayClass = 'other-month-day';
                    row += `<div class="${dayClass}" onclick="DatePicker.instances['${this.id}'].selectDate(${nextMonthDate})">${nextMonthDate}</div>`;
                    nextMonthDate++;
                }
                else if ((i === 0 && j < firstDay)) {
                    const dayClass = 'other-month-day';
                    const day = prevMonthDate - firstDay + j + 1;
                    row += `<div class="${dayClass}" onclick="DatePicker.instances['${this.id}'].selectDate(${day})">${day}</div>`;
                }
                else {
                    const dayClass = 'current-month-day';
                    row += `<div class="${dayClass}" onclick="DatePicker.instances['${this.id}'].selectDate(${dayCounter})">${dayCounter}</div>`;
                    dayCounter++;
                }
            }
            calendarDays += `<div class="week">${row}</div>`;
        }

        return `<div class="days">${calendarDays}</div>`;
    }

    render(date) {
        this.currentDate = date;
        const datePickerDiv = document.getElementById(this.id);
        datePickerDiv.innerHTML = this.renderHeader(date) + this.renderDaysHeader() + this.renderDays(date);

        if (!DatePicker.instances) {
            DatePicker.instances = {};
        }
        DatePicker.instances[this.id] = this;
    }

    selectDate(day) {
        const selectedDate = {
            month: this.currentDate.getMonth() + 1,
            day,
            year: this.currentDate.getFullYear()
        };
        this.callback(this.id, selectedDate);
    }

    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.render(this.currentDate);
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.render(this.currentDate);
    }
}

