import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AbNavbar = () => (
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link href="#features">Menu</Nav.Link>
				<Nav.Link href="#pricing">Reservation</Nav.Link>
				<Nav.Link href="#pricing">Contact US</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default AbNavbar
