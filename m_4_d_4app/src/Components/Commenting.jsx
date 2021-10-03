import React from 'react';
import { Form } from 'react-bootstrap';

export default class Commenting extends React.Component {
	state = {
		Comment: {
			comment: '',
			rate: 1,
			elementID: this.props.asin,
		},
	};
	render() {
		return (
			<>
				<Form.Control
					placeholder="Add Your Comment Here"
					type="text"
					value={this.state.Comment.comment}
					onChange={(e) =>
						this.setState({
							Comment: { ...this.state.Comment, comment: e.target.value },
						})
					}
				/>
				<Form.Control
					onChange={(e) =>
						this.setState({
							Comment: { ...this.state.Comment, rate: e.target.value },
						})
					}
					value={this.state.Comment.rate}
					as="select"
				>
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
