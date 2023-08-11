export default class DueDateCalculator {
  constructor() {
    this.workingHoursPerDay = 8;
    this.workingDaysPerWeek = 5;
    this.workStartHour = 9;
    this.workEndHour = 17;
  }

  calculateTotalHours(turnaroundTime) {
    const fullWorkDays = (turnaroundTime / this.workingHoursPerDay) | 0; // Math floor
    const remainingHours = turnaroundTime % this.workingHoursPerDay;
    return fullWorkDays * this.workingHoursPerDay + remainingHours;
  }

  calculateDueDateFromTotalHours(submitDate, totalHours) {
    const dueDate = new Date(submitDate);
    let remainingHours = totalHours;

    while (remainingHours > 0) {
      dueDate.setHours(dueDate.getHours() + 1);

      if (this.isWorkDay(dueDate) && this.isWorkingHour(dueDate)) {
        remainingHours--;
      }

      // Move to the next work day if outside working hours
      if (!this.isWorkingHour(dueDate)) {
        // Move to the start of the next working day
        dueDate.setHours(this.workStartHour);
        dueDate.setDate(dueDate.getDate() + 1); // Increment the date here
      }
    }
    return dueDate;
  }

  isWorkDay(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= this.workingDaysPerWeek && this.isWorkingHour(date);
  }

  isWorkingHour(date) {
    const hour = date.getHours();
    return hour >= this.workStartHour && hour <= this.workEndHour;
  }
}
