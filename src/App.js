import { getImageUrl } from './utils.js';

import Avatar from './Avatar.js';


import './App.css';
import Profile from './Profile.js';
import Card from './Card.js';


// function App() {
//    return (
//       <Card>
//          <Avatar
// 				deb="true"
//             size={100}
//             person={{
//                name: "Katsuko Saruhashi",
//                imageId: "YfeOqp2",
//             }}
//          />
//       </Card>
//    );
// }

// function Avatar({ person, size }) {
// 	return (
// 		<img
// 			className="avatar"
// 			src={getImageUrl(person)}
// 			alt={person.name}
// 			width={size}
// 			height={size}
// 		/>
// 	);
// }

// function Card({ children }) {
// 	return <div className="card">{children}</div>;
// }

//========================================================================================================================================================

// function App() {
// 	return <Avatar />;
// }

// function Avatar() {
//    return (
//       <img
//          className="avatar"
//          src="https://i.imgur.com/1bX5QH6.jpg"
//          alt="Lin Lanying"
//          width={100}
//          height={100}
//       />
//    );
// }

//========================================================================================================================================================

// function App() {
//    return (
//       <div>
//          <Avatar
//             size={100}
//             person={{
//                name: "Katsuko Saruhashi",
//                imageId: "YfeOqp2",
//             }}
//          />
//          <Avatar
//             size={80}
//             person={{
//                name: "Aklilu Lemma",
//                imageId: "OKS67lh",
//             }}
//          />
//          <Avatar
//             size={50}
//             person={{
//                name: "Lin Lanying",
//                imageId: "1bX5QH6",
//             }}
//          />
//       </div>
//    );
// }

// function Avatar({ person, size }) {
//    return (
//       <img
//          className="avatar"
//          src={getImageUrl(person)}
//          alt={person.name}
//          width={size}
//          height={size}
//       />
//    );
// }

//========================================================================================================================================================


// function App({ person, size, isSepia, thickBorder }) {
//    return (
//       <div className="card">
//          <Avatar
//             person={person}
//             size={size}
//             isSepia={isSepia}
//             thickBorder={thickBorder}
//          />
//       </div>
//    );
// }

// function Profile(props) {
// 	return (
// 		 <div className="card">
// 			  <Avatar {...props} />
// 		 </div>
// 	);
// }


//========================================================================================================================================================



// function Card({ children }) {
// 	return <div className="card">{children}</div>;
// }

//  function App() {
// 	return (
// 		<Card>
// 			<Avatar
// 					size={100}
// 					person={{
// 						name: 'Katsuko Saruhashi',
// 						imageId: 'YfeOqp2',
// 					}}
// 			/>
// 		</Card>
// 	);
// }

//========================================================================================================================================================



// function App() {
//    return (
// 		<div>
// 			<h1>Notable Scientists</h1>
// 			<Profile imageId = 'szV5sdG'
// 						name = 'Maria Skłodowska-Curie'
// 						imageSize = {70}
// 						profession = 'physicist and chemist'
// 						rating = {4}
// 						awards = {[
// 							'Nobel Prize in Physics',
// 							'Nobel Prize in Chemistry',
// 							'Davy Medal',
// 							'Matteucci Medal'
// 						]}
// 						discovery = 'polonium (element)'
// 			/>
// 			<Profile imageId = 'YfeOqp2'
// 						name = 'Katsuko Saruhashi'
// 						imageSize = {70}
// 						profession = 'geochemist'
// 						rating = {2}
// 						awards = {[
// 							'Miyake Prize for geochemistry',
// 							'Tanaka Prize'
// 						]}
// 						discovery = 'a method for measuring carbon dioxide in seawater'
                        
// 			/>
// 		</div>
//    );
// }

// function App() {
//    return (
//       <div>
//          <h1>Notable Scientists</h1>
// 			<Profile name = "Maria Skłodowska-Curie"
// 						imageId = "szV5sdG"
// 						profession = " physicist and chemist"
// 						awards = {[
// 							"Nobel Prize in Physics",
// 							"Nobel Prize in Chemistry",
// 							"Davy Medal",
// 							"Matteucci Medal"
// 						]}
// 						discovery = "polonium (element)"
// 			/>
// 			<Profile name = "Katsuko Saruhashi"
// 						imageId = "YfeOqp2"
// 						profession = "geochemist"
// 						awards = {[
// 							"Miyake Prize for geochemistry",
// 							"Tanaka Prize",
// 						]}
// 						discovery = "a method for measuring carbon dioxide in seawater"
                        
// 			/>
//       </div>
//    );
// }

//========================================================================================================================================================




// Создаем компонент App, который отображает галерею ученых
// 	function App() {
//     // Создаем массив scientists, содержащий информацию о разных ученых
//     const scientists = [
//         {
//             imageId: 'szV5sdG',
//             name: 'Maria Skłodowska-Curie',
//             profession: 'physicist and chemist',
//             discovery: 'polonium (chemical element)',
//             awards: [
//                 'Nobel Prize in Physics',
//                 'Nobel Prize in Chemistry',
//                 'Davy Medal',
//                 'Matteucci Medal',
//             ],
//         },
//         {
//             imageId: 'YfeOqp2',
//             name: 'Katsuko Saruhashi',
//             profession: 'geochemist',
//             discovery: 'a method for measuring carbon dioxide in seawater',
//             awards: [
//                 'Miyake Prize for geochemistry',
//                 'Tanaka Prize',
//             ],
//         },
//         // Вы можете добавить профили других ученых здесь, если нужно
//     ];

//     // Возвращаем разметку галереи ученых
//     return (
//         <div>
//             <h1>Notable Scientists</h1> // Заголовок галереи
//             {/* Используем функцию map, чтобы создать профили для каждого ученого */}
//             {scientists.map((scientist, index) => (
//                 <Profile key={index} person={scientist} />
//             )}
//         </div>
//     );
// }

//========================================================================================================================================================


// function Profile({ person, imageSize = 70 }) {
//     const imageSrc = getImageUrl(person);

//     return (
//         <section className="profile">
//             <h2>{person.name}</h2>
//             <img
//                 className="avatar"
//                 src={imageSrc}
//                 alt={person.name}
//                 width={imageSize}
//                 height={imageSize}
//             />
//             <ul>
//                 <li>
//                     <b>Profession:</b> {person.profession}
//                 </li>
//                 <li>
//                     <b>Awards: {person.awards.length} </b>(
//                     {person.awards.join(', ')})
//                 </li>
//                 <li>
//                     <b>Discovered: </b>
//                     {person.discovery}
//                 </li>
//             </ul>
//         </section>
//     );
// }

// export default function Gallery() {
//     return (
//         <div>
//             <h1>Notable Scientists</h1>
//             <Profile
//                 person={{
//                     imageId: 'szV5sdG',
//                     name: 'Maria Skłodowska-Curie',
//                     profession: 'physicist and chemist',
//                     discovery:
//                         'polonium (chemical element)',
//                     awards: [
//                         'Nobel Prize in Physics',
//                         'Nobel Prize in Chemistry',
//                         'Davy Medal',
//                         'Matteucci Medal',
//                     ],
//                 }}
//             />
//             <Profile
//                 person={{
//                     imageId: 'YfeOqp2',
//                     name: 'Katsuko Saruhashi',
//                     profession: 'geochemist',
//                     discovery:
//                         'a method for measuring carbon dioxide in seawater',
//                     awards: [
//                         'Miyake Prize for geochemistry',
//                         'Tanaka Prize',
//                     ],
//                 }}
//             />
//         </div>
//     );
// }


//========================================================================================================================================================

// const App = () => {
//    // Создаем массив scientists, содержащий информацию о разных ученых
//    const scientists = [
//       {
//          imageId: "szV5sdG",
//          name: "Maria Skłodowska-Curie",
//          profession: "physicist and chemist",
//          discovery: "polonium (chemical element)",
//          awards: [
//             "Nobel Prize in Physics",
//             "Nobel Prize in Chemistry",
//             "Davy Medal",
//             "Matteucci Medal",
//          ],
//       },
//       {
//          imageId: "YfeOqp2",
//          name: "Katsuko Saruhashi",
//          profession: "geochemist",
//          discovery: "a method for measuring carbon dioxide in seawater",
//          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
//       },
//       // Вы можете добавить профили других ученых здесь, если нужно
//    ];
//    return (
//       <div>
//          <h1>Notable Scientists</h1> 
//          {/* Используем функцию map, чтобы создать профили для каждого ученого */}
//          {scientists.map((scientist, index) => (
//             <Profile key={index} person={scientist} />
//          ))}
//       </div>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    return (
//       <>
//          <Avatar
//             size={40}
//             person={{
//                name: "Gregorio Y. Zara",
//                imageId: "7vQD0fP",
//             }}
//          />
//          <Avatar
//             size={120}
//             person={{
//                name: "Gregorio Y. Zara",
//                imageId: "7vQD0fP",
//             }}
//          />
//       </>
//    );
// }

//========================================================================================================================================================

// function App() {``
//    return (
//       <div>
//          <div className="card">
//             <div className="card-content">
//                <h1>Photo</h1>
//                <img
//                   className="avatar"
//                   src="https://i.imgur.com/OKS67lhm.jpg"
//                   alt="Aklilu Lemma"
//                   width={70}
//                   height={70}
//                />
//             </div>
//          </div>
//          <div className="card">
//             <div className="card-content">
//                <h1>About</h1>
//                <p>
//                   Aklilu Lemma was a distinguished Ethiopian scientist who
//                   discovered a natural treatment to schistosomiasis.
//                </p>
//             </div>
//          </div>
//       </div>
//    );
// }
const App = () => {
   return (
      <div>
         <Card>
            <h1>Photo</h1>
            <img
               className="avatar"
               src="https://i.imgur.com/OKS67lhm.jpg"
               alt="Aklilu Lemma"
               width={100}
               height={100}
            />
         </Card>
         <Card>
            <h1>About</h1>
            <p>
               Aklilu Lemma was a distinguished Ethiopian scientist who
               discovered a natural treatment to schistosomiasis.
            </p>
         </Card>
      </div>
   );
};



export default App;
