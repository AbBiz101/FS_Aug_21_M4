import { React, useState } from 'react';
import Expenseitem from './Expenseitem';
import ExpensFilter from './ExpensFilter';

export function ExpenseBox(props) {
	const [year, setYear] = useState('');
	const yearFilterHandler = (selectedyear) => {
		setYear(selectedyear);
		console.log('fd', year, 'fd', selectedyear);
	};
	const filteredExp = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === year;
	});

	let filterdexpenseContent = <p>No item purchesed!</p>;
	if (filteredExp.length > 0) {
		filterdexpenseContent = filteredExp.map((item) => (
			<Expenseitem
				key={item.id}
				date={item.date}
				title={item.title}
				amount={item.amount}
			/>
		));
	}
	return (
		<div className="expenses">
			<ExpensFilter selected={year} onFilter={yearFilterHandler} />;
			{filterdexpenseContent}
		</div>
	);
}
