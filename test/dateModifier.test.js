import DateModifier from "../modifier/DateModifier.mjs";
import { INCREMENT_BY_1 } from "../constant/dueDateCalculatorConstants.mjs";

describe("Modify Date object", () => {
  const dateModifier = DateModifier;

  test("Is setting date", () => {
    const date = new Date("2023-08-14T14:12:00");
    const modifiedDate = dateModifier.setDate(date).getDate();
    const expectedDate = date.getDate() + INCREMENT_BY_1;
    expect(modifiedDate + INCREMENT_BY_1).toBe(expectedDate);
  });

  test("Is setting hours", () => {
    const date = new Date("2023-08-14T14:12:00");
    const modifiedHour = dateModifier.setHours(date).getHours();
    const expectedHour = date.getHours() + INCREMENT_BY_1;
    expect(modifiedHour + INCREMENT_BY_1).toBe(expectedHour);
  });
});
