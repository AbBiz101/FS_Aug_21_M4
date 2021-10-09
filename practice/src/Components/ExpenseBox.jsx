import { React, useState } from 'react';
import Expenseitem from './Expenseitem';
import ExpensFilter from './ExpensFilter';

export function ExpenseBox(props) {
	const [year, setYear] = useState('');
	const yearFilterHandler = (selectedyear) => {
		setYear(selectedyear);
		console.log('fd', year, 'fd', selectedyear);
	};
	return (
		<div className="expenses">
			<ExpensFilter selected={year} onFilter={yearFilterHandler} />;
			{props.data.map((item) => (
				<Expenseitem
					key={item.id}
					date={item.date}
					title={item.title}
					amount={item.amount}
				/>
			))}
		</div>
	);
}
