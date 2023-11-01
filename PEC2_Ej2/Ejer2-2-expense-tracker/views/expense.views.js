/**
 * @class View
 *
 * Visual representation of the model.
 */
class ExpenseView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.list = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');
    this.addButton = document.getElementById('add-btn');
    this.deleteButton = document.getElementById('delete-btn');

  }

  get _expenseText() {
    return this.text.value;
  }
  get _expenseAmount() {
    return this.amount.value;
  }

  _resetInput() {
    console.log("llego aqui reset");
    this.text.value = "";
    this.amount.value = "";
  }

  bindAddExpense(handler) {
    this.addButton.addEventListener("click", event => {
      event.preventDefault();
      console.log("llego aqui")

      if (this._expenseText && this._expenseAmount) {
        handler(this._expenseText, this._expenseAmount);
        this._resetInput();
      }
    });
  }

  bindDeleteExpense(handler) {
    this.list.addEventListener("click", event => {
      if (event.target.className === "delete-btn") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }

  displayExpenses(expenses) {
    console.log(expenses);
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
    let totalBalance = 0.0;
    let positiveValues = 0.0;
    let negativeValues = 0.0;
    expenses.forEach(expense => {
      const li = document.createElement("li");
      li.id = expense.id;
      const sign = expense.amount < 0 ? '-' : '+';
      li.className = expense.amount < 0 ? 'minus' : 'plus';
      li.innerHTML = `
      ${expense.text} <span>${sign}${Math.abs(
        expense.amount
      )}</span> <button class="delete-btn">x</button>`;
      this.list.appendChild(li);
      totalBalance += expense.amount;

      if (expense.amount < 0) {
        negativeValues += expense.amount;
      } else {
        positiveValues += expense.amount;
      }


    });
    this.balance.innerText = "$" + totalBalance;
    this.money_plus.innerText = "+$" + positiveValues;
    this.money_minus.innerText = "-$" + Math.abs(negativeValues);
  }
}