import logo from './logo.svg';
import './App.css';


function App() {
	function handleClick() {
		alert('You clicked me!');
  }
   return <button onClick={handleClick}>Click me</button>;
}

export default App;
