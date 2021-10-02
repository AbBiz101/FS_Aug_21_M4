import { Row, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import Myclass from './Myclass';
class AbCard extends Component {
	state = {
		book: [],
		search: '',
	};

	render() {
		return (
			<>
				<Row>
					<Form.Control
						type="text"
						placeholder="Book title..."
						value={this.state.value}
						onChange={(e) => this.setState({ search: e.currentTarget.value })}
					/>
				</Row>
				<Row>
					{this.state.book
						.filter(
							(book) =>
								book.title.toLowerCase().indexOf(this.state.search) !== -1 ||
								book.category.toLowerCase().indexOf(this.state.search) !== -1,
						)
						.map((book) => (
							<Myclass key={book.asin} item={book} />
						))}
				</Row>
			</>
		);
	}

	componentDidMount = async () => {
		const resp = await fetch(
			'https://striveschool-api.herokuapp.com/books?offset=0&limit=50',
		);
		if (resp.ok) {
			const book = await resp.json();
			this.setState({ book: book });
		}
	};
}

export default AbCard;
