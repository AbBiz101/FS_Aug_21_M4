import './App.css';
import './Style/home.css';
import './Style/style.css';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';
import BigCard from './Components/BigCard';

function App() {
	return (
			<div className="container-fluid m-0 main-body">
				<div className="row main">
			    <SideNav />
			    <BigCard />
			    <Footer />
			  </div>
			</div>

	);
}

export default App;
