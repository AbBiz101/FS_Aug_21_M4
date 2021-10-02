import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
class Myclass extends Component {
	state = {};
	render() {
		return (
			<>
				<Card style={{ width: '18rem', margin: '5px' }}>
					<Card.Img variant="top" src={this.props.item.img} />
					<Card.Body>
						<Card.Title>Title:{this.props.item.title}</Card.Title>
						<Card.Text>
							Category:{this.props.item.category} {this.props.item.price}
						</Card.Text>
						<Button variant="success">Buy</Button>
					</Card.Body>
				</Card>
			</>
		);
	}
}
export default Myclass;
