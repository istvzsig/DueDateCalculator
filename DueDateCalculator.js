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

  isWorkingHour(date) {
    const hour = date.getHours();
    return hour >= this.workStartHour && hour <= this.workEndHour;
  }
}
