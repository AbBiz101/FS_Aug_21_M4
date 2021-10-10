import React from 'react';
import ExpenseForm from './ExpenseForm';
export default function NewExpense(props) {
	const SaveDataHandler = (enterdExpenseData) => {
		const expenseData = { ...enterdExpenseData, id: Math.random().toString() };
		props.addExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<button>Add New Expense</button>
			<ExpenseForm onSaveData={SaveDataHandler} />;
		</div>
	);
}
