import DueDateCalculator from "../DueDateCalculator";

describe("isWorkingHour", () => {
  const calculator = new DueDateCalculator();

  test("Returns true if time is within working hours", () => {
    // Wednesday, 2:00 PM
    const date = new Date("2023-08-16T14:00:00");
    expect(calculator.isWorkingHour(date)).toBe(true);
  });

  test("Returns false if time is before working hours", () => {
    // Thursday, 7:00 AM
    const date = new Date("2023-08-17T07:00:00");
    expect(calculator.isWorkingHour(date)).toBe(false);
  });

  test("Returns false if time is after working hours", () => {
    // Friday, 6:00 PM
    const date = new Date("2023-08-18T18:00:00");
    expect(calculator.isWorkingHour(date)).toBe(false);
  });
});
