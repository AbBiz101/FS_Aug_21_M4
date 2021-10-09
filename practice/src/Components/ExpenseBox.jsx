import React from 'react';
import Expenseitem from './Expenseitem';

export function ExpenseBox(props) {
	return (
		<div className="expenses">
			{props.data.map((item) => (
				<Expenseitem date={item.date} title={item.title} amount={item.amount} />
			))}
		</div>
	);
}
