import logo from './logo.svg';
import './App.css';

const products = [
	{ title: 'Cabbage', isFruit: false, id: 1 },
	{ title: 'Garlic', isFruit: false, id: 2 },
	{ title: 'Apple', isFruit: true, id: 3 },
];

function App() {
	function handleClick() {
		alert('You clicked me!');
  }
   return <button onClick={handleClick}>Click me</button>;
}

export default App;
