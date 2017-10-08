import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should get correct total from expenses", () => {
  const result = selectExpensesTotal(expenses);
  const total = expenses.map(expense => expense.amount).reduce((prev, next) => prev + next);
  expect(result).toEqual(total);
});

test("should get correct total with one expense", () => {
  const singleExpense = expenses[0];
  const result = selectExpensesTotal([singleExpense]);
  const total = 195;
  expect(result).toEqual(total);
});

test("should return 0 if no expense", () => {
  const result = selectExpensesTotal([]);
  const total = 0;
  expect(result).toEqual(total);
});
