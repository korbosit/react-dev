import { getImageUrl } from './utils.js';
import './App.css';



function App() {
   return (
      <Card>
         <Avatar
				deb="true"
            size={100}
            person={{
               name: "Katsuko Saruhashi",
               imageId: "YfeOqp2",
            }}
         />
      </Card>
   );
}

function Avatar({ person, size }) {
	return (
		<img
			className="avatar"
			src={getImageUrl(person)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}

function Card({ children }) {
	return <div className="card">{children}</div>;
}

export default App;
