
import './App.css';

// const person = {
// 	name: 'Gregorio Y. Zara',
// 	theme: {
// 		 backgroundColor: 'black',
// 		 color: 'pink',
// 	},
// };


// function App() {
//    return (
//       <div style={person.theme}>
//          <h1>{person.name}'s Todos</h1>
//          <img
//             className="avatar"
//             src="https://i.imgur.com/7vQD0fPs.jpg"
//             alt="Gregorio Y. Zara"
//          />
//          <ul>
//             <li>Improve the videophone</li>
//             <li>Prepare aeronautics lectures</li>
//             <li>Work on the alcohol-fuelled engine</li>
//          </ul>
//       </div>
//    );
// }

//========================================================================================================================================================


// function App() {
//    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//    const description = "Gregorio Y. Zara";
//    return <img className="avatar" src={avatar} alt={description} />;
// }

//========================================================================================================================================================


// function App() {
// 	const name = 'Gregorio Y. Zara';
// 	return <h1>{name}'s To Do List</h1>;
// }

//========================================================================================================================================================

// const today = new Date();

// function formatDate(date) {
//     return new Intl.DateTimeFormat('en-US', {
//         weekday: 'long',
//     }).format(date);
// }	

// function App() {
// 	return <h1>To Do List for {formatDate(today)}</h1>;
// }

//========================================================================================================================================================

// function App() {
//    return (
//       <ul
//          style={{
//             backgroundColor: "black",
//             color: "pink",
//          }}
//       >
//          <li>Improve the videophone</li>
//          <li>Prepare aeronautics lectures</li>
//          <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//    );
// }

//========================================================================================================================================================

// const person = {
// 	name: 'Gregorio Y. Zara',
// 	theme: {
// 		 backgroundColor: 'black',
// 		 color: 'pink',
// 	},
// };


// function App() {
//    return (
//       <div style={person.theme}>
//          <h1>{person.name}'s Todos</h1>
//          <img
//             className="avatar"
//             src="https://i.imgur.com/7vQD0fPs.jpg"
//             alt="Gregorio Y. Zara"
//          />
//          <ul>
//             <li>Improve the videophone</li>
//             <li>Prepare aeronautics lectures</li>
//             <li>Work on the alcohol-fuelled engine</li>
//          </ul>
//       </div>
//    );
// }

//========================================================================================================================================================

const baseUrl = 'https://i.imgur.com/';
const person = {
	name: 'Gregorio Y. Zara',
	imageId: '7vQD0fP',
	imageSize: 's',
	theme: {
		backgroundColor: 'black',
		color: 'pink',
	},
};

function App() {
   return (
      <div style={person.theme}>
         <h1>{person.name}'s Todos</h1>
         <img
            className="avatar"
            src={baseUrl + person.imageId + person.imageSize + ".jpg"}
            alt={person.name}
         />
         <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
         </ul>
      </div>
   );
}


export default App;
