import DueDateCalculator from "../DueDateCalculator";

describe("Calculate Total Hours", () => {
  const dueDateCalculator = new DueDateCalculator();

  test('It calculates hours from turnaround time.', () => {
    // Example: 2 days and 3 hours should result in 19 hours (2 * 8 + 3)
    const turnaroundTime = 2 * dueDateCalculator.workingHoursPerDay + 3;
    const totalHours = dueDateCalculator.calculateTotalHours(turnaroundTime);
    expect(totalHours).toEqual(19);
  });
});