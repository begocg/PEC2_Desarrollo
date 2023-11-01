/**
 * @class Service
 *
 * Manages the data of the application.
 */
class ExpenseService {
  constructor() {
    this.expenses = (JSON.parse(localStorage.getItem('expenses')) || []).map(
      expense => new Expense(expense)
    );
  }

  addExpense(text, amount) {
    this.expenses.push(new Expense({ text , amount }));

    this._commit(this.expenses);
  }

  _commit(expenses) {
    this.onExpenseListChanged(expenses);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  deleteExpense(_id) {
    console.log(_id)
    this.expenses = this.expenses.filter(({ id }) => id !== _id);

    this._commit(this.expenses);
  }

  bindExpenseListChanged(callback){
    this.onExpenseListChanged = callback;
  }

}
