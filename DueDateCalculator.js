import {
  INCREMENT,
  WORKING_HOURS_PER_DAY,
  WORKING_DAYS_PER_WEEK,
  WORK_START_HOUR,
  WORK_END_HOUR,
  FIRST_WORK_DAY,
} from './constants/dueDateCalculator.mjs';

class DueDateCalculator {
  constructor() {
    this.workingHoursPerDay = WORKING_HOURS_PER_DAY;
    this.workingDaysPerWeek = WORKING_DAYS_PER_WEEK;
    this.workStartHour = WORK_START_HOUR;
    this.workEndHour = WORK_END_HOUR;
    this.firstWorkDay = FIRST_WORK_DAY;
  }

  calculateDueDate(submitDate, turnaroundTime) {
    const totalHours = this.calculateTotalHours(turnaroundTime);
    const dueDate = this.calculateDueDateFromTotalHours(submitDate, totalHours);
    return dueDate;
  }

  calculateDueDateFromTotalHours(submitDate, totalHours) {
    const dueDate = new Date(submitDate);
    let remainingHours = totalHours;

    while (remainingHours > 0) {
      dueDate.setHours(dueDate.getHours() + INCREMENT);
      if (this.isWorkingDay(dueDate) && this.isWorkingHour(dueDate)) {
        remainingHours--;
      }
      if (!this.isWorkingHour(dueDate)) {
        // Move to the start of the next working day
        dueDate.setHours(this.workStartHour);
        // Increment the date here
        dueDate.setDate(dueDate.getDate() + INCREMENT);
      }
    }
    return dueDate;
  }

  calculateTotalHours(turnaroundTime) {
    const fullWorkDays = (turnaroundTime / this.workingHoursPerDay) | 0; // Math floor
    const remainingHours = turnaroundTime % this.workingHoursPerDay;
    return fullWorkDays * this.workingHoursPerDay + remainingHours;
  }

  isWorkingDay(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek >= this.firstWorkDay && dayOfWeek <= this.workingDaysPerWeek && this.isWorkingHour(date);
  }

  isWorkingHour(date) {
    const hour = date.getHours();
    return hour >= this.workStartHour && hour <= this.workEndHour;
  }
}

export default DueDateCalculator;