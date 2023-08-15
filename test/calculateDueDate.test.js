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
});
