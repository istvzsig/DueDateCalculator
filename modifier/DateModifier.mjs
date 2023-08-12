import { INCREMENT_BY_1 } from "../constant/dueDateCalculatorConstants.mjs";

class DateModifier {
  static isValidDate(date) {
    return Date.parse(date) ? true : false;
  }

  static setDate(date) {
    date.setDate(date.getDate() + INCREMENT_BY_1);
    return date;
  }
  
  static setHours(date) {
    date.setHours(date.getHours() + INCREMENT_BY_1);
    return date;
  }

}

export default DateModifier;