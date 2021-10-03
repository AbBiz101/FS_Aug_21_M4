import React from 'react';
import { Form } from 'react-bootstrap';

export default class Commenting extends React.Component {
	state = {
		comment: '',
		rate: 1,
		elementID: this.props.asin,
	};
	render() {
		return (
			<>
				<Form.Control placeholder="Add Your Comment Here" type="text" />
				<Form.Control as="select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Form.Control>
			</>
		);
	}
}
