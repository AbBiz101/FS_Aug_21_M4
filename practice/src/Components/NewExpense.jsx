import React from 'react';
import ExpenseForm from './ExpenseForm';
export default function NewExpense(props) {
	const SaveDataHandler = (enterdExpenseData) => {
		const expenseData = { ...enterdExpenseData, id: Math.random().toString() };
		props.addExpense(expenseData);
	};

	return (
        <div>
			<ExpenseForm onSaveData={SaveDataHandler} />;
		</div>
	);
}
