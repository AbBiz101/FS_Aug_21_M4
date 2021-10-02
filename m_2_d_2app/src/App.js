import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AbNavbar from './components/AbNavbar';
import AbCard from './components/AbCard';
import AbFooter from './components/AbFooter';
import AbJambotron from './components/AbJambotron';

function App() {
	return (
		<div>
			<AbNavbar />
			<AbJambotron/>
			<AbCard />
			<AbFooter />
		</div>
	);
}

export default App;
