import DueDateCalculator from "../DueDateCalculator";

describe("Submitted on work day", () => {
  const calculator = new DueDateCalculator();

  test("returns true for a weekday within working hours", () => {
    // Monday, 10:30 AM
    const date = new Date("2023-08-14T10:30:00");
    expect(calculator.isWorkDay(date)).toBe(true);
  });

  test("returns false for a weekend day", () => {
    // Sunday, 2:00 PM
    const date = new Date("2023-08-13T14:00:00");
    expect(calculator.isWorkDay(date)).toBe(false);
  });

  test("returns false for a weekday before working hours", () => {
    // Tuesday, 7:00 AM
    const date = new Date("2023-08-15T07:00:00");
    expect(calculator.isWorkDay(date)).toBe(false);
  });

  test("returns false for a weekday after working hours", () => {
    // Wednesday, 6:00 PM
    const date = new Date("2023-08-16T18:00:00");
    expect(calculator.isWorkDay(date)).toBe(false);
  });
});
