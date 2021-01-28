import logo from './logo.svg';
import './App.css';
import './theme.css';
import PageContent from '../src/components/PageContent/PageContent';
import Navbar from '../src/components/Navbar/Navbar'
import Post from "../src/components/Post/Post"

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<PageContent />
		</div>
	);
}

export default App;
