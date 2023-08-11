import DueDateCalculator from "../DueDateCalculator";

describe("isWorkingHour", () => {
  const calculator = new DueDateCalculator();

  test("Returns true if time is within working hours", () => {
    // Wednesday, 2:00
    const date = new Date("2023-08-16T14:00:00");
    expect(calculator.isWorkingHour(date)).toBe(true);
  });

  test("Returns true if time is within working hours", () => {
    // Monday, 14:41:55
    const date = new Date("2023-08-14T14:41:55");
    expect(calculator.isWorkingHour(date)).toBe(true);
  });

  test("Returns false if time is before working hours", () => {
    // Thursday, 7:00
    const date = new Date("2023-08-17T07:00:00");
    expect(calculator.isWorkingHour(date)).toBe(false);
  });

  test("Returns false if time is after working hours", () => {
    // Friday, 18:41:55
    const date = new Date("2023-08-18T18:41:55");
    expect(calculator.isWorkingHour(date)).toBe(false);
  });
  
  test("Returns false if time is within working hours and not working day", () => {
    // Sunday, 14:47
    const date = new Date("2023-08-18T18:00:00");
    expect(calculator.isWorkingHour(date)).toBe(false);
  });
});
