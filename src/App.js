import { getImageUrl } from './utils.js';

import Avatar from './Avatar.js';


import './App.css';
import Profile from './Profile.js';
import Card from './Card.js';


// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

// function Item({ name, isPacked }) {
// 	return <li className="item">{name}</li>;
// }

//========================================================================================================================================================

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

// function Item({ name, isPacked }) {
// 	if (isPacked) {
// 		return <li className="item">{name} ✔</li>;
// 	}

// 	return <li className="item">{name}</li>;
// }


//========================================================================================================================================================

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

// function Item({ name, isPacked }) {
// 	if (isPacked) {
// 		return null;
// 	}

// 	return <li className="item">{name}</li>;
// }

//========================================================================================================================================================

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

// function Item({ name, isPacked }) {
// 	return <li className = "item">
// 		{isPacked ? name + ' ✔': name}
// 	</li>
// }

//========================================================================================================================================================
// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

// function Item({ name, isPacked }) {
// 	return (
//       <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>
//    );
// }

//========================================================================================================================================================

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

// function Item({ name, isPacked }) {
//    return (
//       <li className="item">
//          {name} {isPacked && "✔"}
//       </li>
//    );
// }

//========================================================================================================================================================

// const Item = ({ name, isPacked }) => {
//    let itemContent = name;
//    if (isPacked) {
//       itemContent = name + " ✔";
//    }
//    return <li className="item">{itemContent}</li>;
// };

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

//========================================================================================================================================================

// const Item = ({ name, isPacked }) => {
//    let itemContent = name;
//    if (isPacked) {
//       itemContent = <del>{name + " ✔"}</del>;
//    }
//    return <li className="item">{itemContent}</li>;
// };

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

//========================================================================================================================================================

// const Item = ({ name, isPacked }) => {
//    return (
//       <li className="item">
//          {name} {isPacked ? "✔" : "❌"}
//       </li>
//    );
// };

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item isPacked={true} name="Space suit" />
//             <Item isPacked={true} name="Helmet with a golden leaf" />
//             <Item isPacked={false} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

//========================================================================================================================================================

// const Item = ({ name, importance }) => {
//    return (
//       <li className="item">
//          {importance && importance > 0 ? (
//             <em>
//                {name} (Важность: {importance})
//             </em>
//          ) : (
//             name
//          )}
//       </li>
//    );
// };

// const App = () => {
//    return (
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//          <ul>
//             <Item importance={9} name="Space suit" />
//             <Item importance={0} name="Helmet with a golden leaf" />
//             <Item importance={6} name="Photo of Tam" />
//          </ul>
//       </section>
//    );
// };

//========================================================================================================================================================

const Drink = ({ name }) => {
   let part, caffeine, age;
   if (name === "tea") {
      part = "leaf";
      caffeine = "15–70 mg/cup";
      age = "4,000+ years";
   } else if (name === "coffee") {
      part = "bean";
      caffeine = "80–185 mg/cup";
      age = "1,000+ years";
   }
   return (
      <section>
         <h1>{name}</h1>
         <dl>
            <dt>Part of plant</dt>
            <dd>{part}</dd>
            <dt>Caffeine content</dt>
            <dd>{caffeine}</dd>
            <dt>Age</dt>
            <dd>{age}</dd>
         </dl>
      </section>
   );
};

const App = () => {
   return (
      <div>
         <Drink name="tea" />
         <Drink name="coffee" />
      </div>
   );
};






export default App;
