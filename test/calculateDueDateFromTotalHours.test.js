import DueDateCalculator from "../DueDateCalculator";

describe("Is working hour", () => {
    const calculator = new DueDateCalculator();

    test('calculates due date correctly within the same day', () => {
        // Wednesday, 2:00 PM, totalHours = 3
        const submitDate = new Date('2023-08-16T14:00:00');
        const totalHours = 3;
    
        const dueDate = calculator.calculateDueDateFromTotalHours(submitDate, totalHours);
    
        // Expected: Wednesday, 2023-08-16, 5:00 PM
        const expectedDueDate = new Date('2023-08-16T17:00:00');
        expect(dueDate).toEqual(expectedDueDate);
    });
    
    test('calculates due date correctly across multiple days', () => {
        // Monday, 10:00 AM, totalHours = 18
        const submitDate = new Date('2023-08-14T10:00:00');
        const totalHours = 18;
    
        const dueDate = calculator.calculateDueDateFromTotalHours(submitDate, totalHours);
    
        // Expected: Tuesday, 2023-08-15, 4:00 PM
        const expectedDueDate = new Date('2023-08-15T16:00:00');
        expect(dueDate).toEqual(expectedDueDate);
    });
});
