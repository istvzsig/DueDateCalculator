import DueDateCalculator from "../DueDateCalculator";

describe("calculateTotalHours", () => {
  const calculator = new DueDateCalculator();

  test("calculates total hours", () => {
    // Example: 2 days and 3 hours should result in 19 hours (2 * 8 + 3)
    const turnaroundTime = 2 * calculator.workingHoursPerDay + 3;
    const totalHours = calculator.calculateTotalHours(turnaroundTime);
    expect(totalHours).toBe(19);
  });
});
