import DueDateCalculator from "../DueDateCalculator";

describe("Is working hour", () => {
    const calculator = new DueDateCalculator();

    test('calculates due date correctly across multiple days', () => {
        const submitDate = new Date('2023-08-14T14:12:00');
        const totalHours = 16;
        const expectedDueDate = new Date('2023-08-16T14:12:00');
        const dueDate = calculator.calculateDueDateFromTotalHours(submitDate, totalHours);
        expect(dueDate).toEqual(expectedDueDate);
    });
});
