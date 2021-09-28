import { Card, Button } from 'react-bootstrap';
const AbCard = () => (
	<Card class="col-2 mx-1" style={({ width: '18rem' }, { height: '10rem' })}>
		<Card.Img variant="top" src="https://source.unsplash.com/random" />
		<Card.Body>
			<Card.Title>Card Title</Card.Title>
			<p>Category</p>
			<p>Price</p>
			<Button variant="primary">Buy</Button>
		</Card.Body>
	</Card>
);
export default AbCard;
