
import './App.css';
import { getImageUrl } from './utils';

// const people = [
// 	'Creola Katherine Johnson: mathematician',
// 	'Mario José Molina-Pasquel Henríquez: chemist',
// 	'Mohammad Abdus Salam: physicist',
// 	'Percy Lavon Julian: chemist',
// 	'Subrahmanyan Chandrasekhar: astrophysicist',
// ];

// const App = () => {

// const listItems = people.map((element, index) => {
// 	return <li key={index}>{element}</li>;
// });

// return (
// 	<ul>{listItems}</ul>
// )

// }

//========================================================================================================================================================

// const people = [
//    {
//       id: 0,
//       name: "Creola Katherine Johnson",
//       profession: "mathematician",
//       accomplishment: "spaceflight calculations",
//       imageId: "MK3eW3A",
//    },
//    {
//       id: 1,
//       name: "Mario José Molina-Pasquel Henríquez",
//       profession: "chemist",
//       accomplishment: "discovery of Arctic ozone hole",
//       imageId: "mynHUSa",
//    },
//    {
//       id: 2,
//       name: "Mohammad Abdus Salam",
//       profession: "physicist",
//       accomplishment: "electromagnetism theory",
//       imageId: "bE7W1ji",
//    },
//    {
//       id: 3,
//       name: "Percy Lavon Julian",
//       profession: "chemist",
//       accomplishment:
//          "pioneering cortisone drugs, steroids and birth control pills",
//       imageId: "IOjWm71",
//    },
//    {
//       id: 4,
//       name: "Subrahmanyan Chandrasekhar",
//       profession: "astrophysicist",
//       accomplishment: "white dwarf star mass calculations",
//       imageId: "lrWQx8l",
//    },
// ];


// const App = () => {
//    const chemists = people.filter((person) => person.profession === "chemist");
//    const listItems = chemists.map((person) => (
//       <li>
//          <img src={getImageUrl(person)} alt={person.name} />
//          <p>
//             <b>{person.name}:</b>
//             {" " + person.profession + " "}
//             known for {person.accomplishment}
//          </p>
//       </li>
//    ));
//    return <ul>{listItems}</ul>;
// };

//========================================================================================================================================================

// const people = [
//    {
//       id: 0,
//       name: "Creola Katherine Johnson",
//       profession: "mathematician",
//       accomplishment: "spaceflight calculations",
//       imageId: "MK3eW3A",
//    },
//    {
//       id: 1,
//       name: "Mario José Molina-Pasquel Henríquez",
//       profession: "chemist",
//       accomplishment: "discovery of Arctic ozone hole",
//       imageId: "mynHUSa",
//    },
//    {
//       id: 2,
//       name: "Mohammad Abdus Salam",
//       profession: "physicist",
//       accomplishment: "electromagnetism theory",
//       imageId: "bE7W1ji",
//    },
//    {
//       id: 3,
//       name: "Percy Lavon Julian",
//       profession: "chemist",
//       accomplishment:
//          "pioneering cortisone drugs, steroids and birth control pills",
//       imageId: "IOjWm71",
//    },
//    {
//       id: 4,
//       name: "Subrahmanyan Chandrasekhar",
//       profession: "astrophysicist",
//       accomplishment: "white dwarf star mass calculations",
//       imageId: "lrWQx8l",
//    },
// ];


// const App = () => {
//    const listItems = people.map((person) => (
//       <li key={person.id}>
//          <img src={getImageUrl(person)} alt={person.name} />
//          <p>
//             <b>{person.name}:</b>
//             {" " + person.profession + " "}
//             known for {person.accomplishment}
//          </p>
//       </li>
//    ));
//    return <ul>{listItems}</ul>;
// };

//========================================================================================================================================================

// const people = [
//    {
//       id: 0,
//       name: "Creola Katherine Johnson",
//       profession: "mathematician",
//       accomplishment: "spaceflight calculations",
//       imageId: "MK3eW3A",
//    },
//    {
//       id: 1,
//       name: "Mario José Molina-Pasquel Henríquez",
//       profession: "chemist",
//       accomplishment: "discovery of Arctic ozone hole",
//       imageId: "mynHUSa",
//    },
//    {
//       id: 2,
//       name: "Mohammad Abdus Salam",
//       profession: "physicist",
//       accomplishment: "electromagnetism theory",
//       imageId: "bE7W1ji",
//    },
//    {
//       id: 3,
//       name: "Percy Lavon Julian",
//       profession: "chemist",
//       accomplishment:
//          "pioneering cortisone drugs, steroids and birth control pills",
//       imageId: "IOjWm71",
//    },
//    {
//       id: 4,
//       name: "Subrahmanyan Chandrasekhar",
//       profession: "astrophysicist",
//       accomplishment: "white dwarf star mass calculations",
//       imageId: "lrWQx8l",
//    },
// ];


// const App = () => {
//    const listItems = people.map((person) => (
//       <li key={person.id}>
//          <img src={getImageUrl(person)} alt={person.name} />
//          <p>
//             <b>{person.name}:</b>
//             {" " + person.profession + " "}
//             known for {person.accomplishment}
//          </p>
//       </li>
//    ));
//    return (
//       <article>
//          <h1>Scientists</h1>
//          <ul>{listItems}</ul>
//       </article>
//    );
// };

// const App = () => {
// 	// фильтруем химиков и получаем массив химиков
//    const chemists = people.filter((person) => person.profession === "chemist");
// 	// фильтруем остальных ученых и получаем массив их
//    const otherScientists = people.filter(
//       (person) => person.profession !== "chemist"
//    );
	
// 	// мапим химиков
//    const chemistItems = chemists.map((person) => (
//       <li key={person.id}>
//          <img src={getImageUrl(person)} alt={person.name} />
//          <p>
//             <b>{person.name}:</b>
//             {" " + person.profession + " "}
//             known for {person.accomplishment}
//          </p>
//       </li>
//    ));
// 	// мапим остальных ученых
//    const otherScientistItems = otherScientists.map((person) => (
//       <li key={person.id}>
//          <img src={getImageUrl(person)} alt={person.name} />
//          <p>
//             <b>{person.name}:</b>
//             {" " + person.profession + " "}
//             known for {person.accomplishment}
//          </p>
//       </li>
//    ));

//    return (
//       <article>
//          <h1>Scientists</h1>
//          <ul>
//             {chemists.length > 0 && (
//                <li>
//                   <h2>Chemists</h2>
//                   {chemistItems}
//                </li>
//             )}
//             {otherScientists.length > 0 && (
//                <li>
//                   <h2>Other Scientists</h2>
//                   {otherScientistItems}
//                </li>
//             )}
//          </ul>
//       </article>
//    );
// };

//========================================================================================================================================================

// const recipes = [
//    {
//       id: "greek-salad",
//       name: "Greek Salad",
//       ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//    },
//    {
//       id: "hawaiian-pizza",
//       name: "Hawaiian Pizza",
//       ingredients: [
//          "pizza crust",
//          "pizza sauce",
//          "mozzarella",
//          "ham",
//          "pineapple",
//       ],
//    },
//    {
//       id: "hummus",
//       name: "Hummus",
//       ingredients: [
//          "chickpeas",
//          "olive oil",
//          "garlic cloves",
//          "lemon",
//          "tahini",
//       ],
//    },
// ];

// const App = () => {

// 	const listRecept = recipes.map((recipe) => (
// 		<div key={recipe.id}>
// 			<h2>{recipe.name}</h2>
// 			<ul>
// 				{recipe.ingredients.map((ingredient) => (
// 					<li>
// 						{ingredient}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	));

//    return (
//       <div>
//          <h1>Recipes</h1>
// 			{listRecept}
//       </div>
//    );
// };

//========================================================================================================================================================

// const recipes = [
//    {
//       id: "greek-salad",
//       name: "Greek Salad",
//       ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//    },
//    {
//       id: "hawaiian-pizza",
//       name: "Hawaiian Pizza",
//       ingredients: [
//          "pizza crust",
//          "pizza sauce",
//          "mozzarella",
//          "ham",
//          "pineapple",
//       ],
//    },
//    {
//       id: "hummus",
//       name: "Hummus",
//       ingredients: [
//          "chickpeas",
//          "olive oil",
//          "garlic cloves",
//          "lemon",
//          "tahini",
//       ],
//    },
// ];


// const Recipe = ({id, name, ingredients}) => {
// 	return (
// 		<div>
// 			<h2>{name}</h2>
// 			<ul>
// 				{ingredients.map((ingredient) =>(
// 					<li key={ingredient}>
// 						{ingredient}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
//    );
// }

// const App = () => {
//    return (
//       <div>
//          <h1>Recipes</h1>
//          {recipes.map((recipe) => (
//             <Recipe {...recipe} key={recipe.id} />
//          ))}
//       </div>
//    );
// };

//========================================================================================================================================================


import { Fragment } from 'react';

const poem = {
   lines: [
      "I write, erase, rewrite",
      "Erase again, and then",
      "A poppy blooms.",
   ],
};

const App = () => {
   return (
      <article>
         {poem.lines.map((line, i) => (
            <Fragment key={i}>
               {i > 0 && <hr />}
               <p>{line}</p>
            </Fragment>
         ))}
      </article>
   );
};


export default App;
