import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AbNavbar from './components/AbNavbar';
import AbHome from './components/AbHome';
//import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
	return (
		<div>
			<AbNavbar />
			<AbHome/>
		</div>
	);
}

export default App;
