/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class ExpenseController {
  constructor(service, view) {
    this.view = view;
    this.service = service;

    // Bind event handlers
    
    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);

    // Set initial state
    this.view.displayExpenses(this.service.expenses);

    // Subscribe to expense list changes
    this.service.bindExpenseListChanged(this.onExpenseListChanged);
  }

  handleAddExpense = (text, amount) => {
    // Add a new expense
    this.service.addExpense(text, parseFloat(amount));

    // Update the view
    this.view.displayExpenses(this.service.expenses);
  }

  handleDeleteExpense = (id) => {
    // Delete an expense
    this.service.deleteExpense(id);

    // Update the view
    this.view.displayExpenses(this.service.expenses);
  }

  onExpenseListChanged = (expenses) => {
    // Update the view when the expense list changes
    this.view.displayExpenses(expenses);
  }
}
