import { INCREMENT } from "../constants/dueDateCalculatorConstants.mjs";

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
