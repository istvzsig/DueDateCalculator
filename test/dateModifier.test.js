import DateModifier from "../modifier/DateModifier.mjs";
import { INCREMENT_BY_1 } from "../constant/math.mjs";

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

  test("Returns true if date can be parsed", () => {
    const date = new Date("2023-08-14T14:12:00");
    expect(dateModifier.isValidDate(date)).toBe(true);
  });

  test("Returns true if date can be parsed", () => {
    const text = "2023-08-14T14:12:00";
    expect(dateModifier.isValidDate(text)).toBe(true);
  });

  test("Returns true if date can be parsed", () => {
    const text = "2023-08-14";
    expect(dateModifier.isValidDate(text)).toBe(true);
  });

  test("Returns false if date can not be parsed", () => {
    const text = "55fsad323DDK__asd2";
    expect(dateModifier.isValidDate(text)).toBe(false);
  });
  
  test("Returns false if date can not be parsed", () => {
    const text =  "2023->>??08-14XXX";
    expect(dateModifier.isValidDate(text)).toBe(false);
  });
});
