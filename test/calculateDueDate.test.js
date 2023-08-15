import DueDateCalculator from "../DueDateCalculator";

describe("Calculate due date", () => {
  const calculator = new DueDateCalculator();

  test("Calculates due date correctly within the same day", () => {
    const submitDate = new Date("2023-08-16T14:00:00");
    const turnaroundTime = 3;
    const dueDate = calculator.calculateDueDate(submitDate, turnaroundTime);
    const expectedDueDate = new Date("2023-08-16T17:00:00");
    expect(dueDate).toEqual(expectedDueDate);
  });

  test("Calculates due date correctly across multiple days", () => {
    const submitDate = new Date("2023-08-14T14:12:00");
    const turnaroundTime = 16;
    const dueDate = calculator.calculateDueDate(submitDate, turnaroundTime);
    const expectedDueDate = new Date("2023-08-16T14:12:00");
    expect(dueDate).toEqual(expectedDueDate);
  });

  test("Calculates due date correctly across multiple days including not working days", () => {
    const submitDate = new Date("2023-08-16T14:12:00");
    const turnaroundTime = 24;
    const dueDate = calculator.calculateDueDate(submitDate, turnaroundTime);
    const expectedDueDate = new Date("2023-08-21T14:12:00");
    expect(dueDate).toEqual(expectedDueDate);
  });

  xtest("Calculates due date correctly across multiple days including not working days", () => {
    const submitDate = new Date("Tue Aug 15 2023 09:28:11 GMT+0200");
    // Example: 147 days and 10 hours should result in 9416 hours (1176 * 8 + 8)
    const turnaroundTime = 1176 * calculator.workingHoursPerDay + 8;
    const dueDate = calculator.calculateDueDate(submitDate, turnaroundTime);
    const expectedDueDate = new Date("Tue Sep 10 2024 17:28:11 GMT+0200");
    expect(dueDate).toEqual(expectedDueDate);
  });  
});
