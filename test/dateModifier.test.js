import DateModifier from "../modifier/DateModifier.mjs";
import { INCREMENT } from "../constants/dueDateCalculatorConstants.mjs";

describe("Modify Date object", () => {
  const dateModifier = DateModifier;

  test("Is setting date", () => {
    const date = new Date("2023-08-14T14:12:00");
    const modifiedDate = dateModifier.setDate(date).getDate();
    const expectedDate = date.getDate() + INCREMENT;
    expect(modifiedDate + INCREMENT).toBe(expectedDate);
  });

  test("Is setting hours", () => {
    const date = new Date("2023-08-14T14:12:00");
    const modifiedHour = dateModifier.setHours(date).getHours();
    const expectedHour = date.getHours() + INCREMENT;
    expect(modifiedHour + INCREMENT).toBe(expectedHour);
  });
});
