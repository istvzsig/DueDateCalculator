import DueDateCalculator from "../DueDateCalculator";

describe("Calculate Total Hours", () => {
  const calculator = new DueDateCalculator();

  test('It calculates hours from turnaround time.', () => {
    // Example: 2 days and 3 hours should result in 19 hours (2 * 8 + 3)
    const turnaroundTime = 2 * calculator.workingHoursPerDay + 3;
    const totalHours = calculator.calculateTotalHours(turnaroundTime);
    expect(totalHours).toEqual(19);
  });
  
  test('It calculates hours from turnaround time.', () => {
    // Example: 8 days and 13 hours should result in 85 hours (9 * 8 + 3)
    const turnaroundTime = 9 * calculator.workingHoursPerDay + 13;
    const totalHours = calculator.calculateTotalHours(turnaroundTime);
    expect(totalHours).toEqual(85);
  });

  test('It calculates hours from turnaround time.', () => {
    // Example: 147 days and 10 hours should result in 9416 hours (1176 * 8 + 8)
    const turnaroundTime = 1176 * calculator.workingHoursPerDay + 8;
    const totalHours = calculator.calculateTotalHours(turnaroundTime);
    expect(totalHours).toEqual(9416);
  });
});