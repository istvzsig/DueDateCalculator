# ⏰ Due Date Calculator for Issue Tracking System

## 🚀 Problem Description

We are seeking a solution to implement a due date calculator in an issue tracking system. Your task is to implement the `CalculateDueDate` method:

- Input: Accepts the submission date/time and turnaround time.
- Output: Returns the date/time when the issue is resolved.

## 📝 Rules

- Working hours are from 9 AM to 5 PM on every working day, Monday to Friday.
- Holidays should be disregarded (For instance, a holiday on a Thursday should be considered a working day. A working Saturday counts as a non-working day).
- The turnaround time is defined in working hours (e.g., 2 days equal 16 hours). If a problem was reported at 2:12 PM on Tuesday, and the turnaround time is 16 hours, then the issue is due by 2:12 PM on Thursday.
- Problems can only be reported during working hours (e.g., All submission date values are set between 9 AM and 5 PM).
- Avoid using third-party libraries for date/time calculations (e.g., Moment.js, Carbon, Joda, etc.) or hidden functionalities of the built-in methods.

## 🔧 Technologies

- <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="25"> Object-Oriented Programming (OOP) with vanilla JavaScript.
- <img src="https://jestjs.io/img/jest.png" alt="Jest" width="25"> Automated testing using Jest (version 29.6.2+).

## 📚 Additional Information

- Use your preferred programming language.
- Do not implement the user interface or command-line interface (CLI).
- Avoid writing pseudo code. Provide a code solution that you would commit/push to a repository and that effectively solves the given problem.
- You have 72 hours to submit your solution.
- You can submit your solution even if it is not fully completed.

## 📖 User Manual

Clone this repo:
```git clone https://github.com/istvzsig/DueDateCalculator```

Install with npm:
```npm install --save-dev```
or
```npm i -D```

Run tests:
```npm test```
or
```npm test test/[yourTestFileName].test.js```

---

Created by [Istvan Zsigmond](https://github.com/istvzsig) 

**Note**: This problem statement is provided for illustrative purposes. Please ensure that you refer to the actual problem statement provided to you.
