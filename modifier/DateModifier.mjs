import { INCREMENT } from "../constant/dueDateCalculatorConstants.mjs";

class DateModifier {
  static setDate(date) {
    date.setDate(date.getDate() + INCREMENT);
    return date;
  }
  
  static setHours(date) {
    date.setHours(date.getHours() + INCREMENT);
    return date;
  }

}

export default DateModifier;
