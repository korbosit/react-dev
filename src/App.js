import React from 'react';

import { useState } from 'react';

import Background from './Background.js';
import Box from './Box.js';

import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

import './App.css';


// const App = () => {
//    const [name, setName] = useState("");

//    function handleClick() {
//       const name = prompt('What is your name?');
//       alert(`Hello, ${name}!`);
//    }

//    return <button onClick={handleClick}>Greet</button>;
// };

//========================================================================================================================================================

// const App = () => {
//    const [isSent, setIsSent] = useState(false);
//    const [message, setMessage] = useState("Hi!");
//    if (isSent) {
//       return <h1>Your message is on its way!</h1>;
//    }
//    return (
//       <form
//          onSubmit={(e) => {
//             e.preventDefault();
//             setIsSent(true);
//             sendMessage(message);
//          }}
//       >
//          <textarea
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//          />
//          <button type="submit">Send</button>
//       </form>
//    );
// };

// function sendMessage(message) {
//     // ...
// }

//========================================================================================================================================================

// const App = () => {
//    const [number, setNumber] = useState(100);

//    return (
//       <>
//          <h1>{number}</h1>
//          <button
//             onClick={() => {
//                setNumber(number + 1);
//                setNumber(number + 1);
//                setNumber(number + 1);
//             }}
//          >
//             +3
//          </button>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [number, setNumber] = useState(0);

//    return (
//       <>
//          <h1>{number}</h1>
//          <button
//             onClick={() => {
//                setNumber(number + 5);
//                alert(number);
//             }}
//          >
//             +5
//          </button>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [number, setNumber] = useState(0);

//    return (
//       <>
//          <h1>{number}</h1>
//          <button
//             onClick={() => {
//                setNumber(number + 5);
//                setTimeout(() => {
//                   alert(number);
//                }, 3000);
//             }}
//          >
//             +5
//          </button>
//       </>
//    );
// };

//========================================================================================================================================================


// const App = () => {
//    const [to, setTo] = useState("Alice");
//    const [message, setMessage] = useState("Hello");

//    function handleSubmit(e) {
//       e.preventDefault();
//       setTimeout(() => {
//          alert(`You said ${message} to ${to}`);
//       }, 5000);
//    }

//    return (
//       <form onSubmit={handleSubmit}>
//          <label>
//             To:{" "}
//             <select value={to} onChange={(e) => setTo(e.target.value)}>
//                <option value="Alice">Alice</option>
//                <option value="Bob">Bob</option>
//             </select>
//          </label>
//          <textarea
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//          />
//          <button type="submit">Send</button>
//       </form>
//    );
// };

//========================================================================================================================================================


// const App = () => {
//    const [walk, setWalk] = useState(true);

//    function handleClick() {
//       setWalk(!walk);
//       alert(walk ? "Stop is next" : "Walk is next");
//    }

//    return (
//       <>
//          <button onClick={handleClick}>
//             Change to {walk ? "Stop" : "Walk"}
//          </button>
//          <h1
//             style={{
//                color: walk ? "darkgreen" : "darkred",
//             }}
//          >
//             {walk ? "Walk" : "Stop"}
//          </h1>
//       </>
//    );
// };

//========================================================================================================================================================


// const App = () => {
//    const [number, setNumber] = useState(0);

//    return (
//       <>
//          <h1>{number}</h1>
//          <button
//             onClick={() => {
//                setNumber((n) => n + 1);
//                setNumber((n) => n + 1);
//                setNumber((n) => n + 1);
//             }}
//          >
//             +3
//          </button>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [number, setNumber] = useState(0);

//    return (
//       <>
//          <h1>{number}</h1>
//          <button
//             onClick={() => {
//                setNumber(number + 5);
//                setNumber((n) => n + 1);
//             }}
//          >
//             Increase the number
//          </button>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [number, setNumber] = useState(0);

//    return (
//       <>
//          <h1>{number}</h1>
//          <button
//             onClick={() => {
//                setNumber(number + 5);
//                setNumber((n) => n + 1);
//                setNumber(42);
//             }}
//          >
//             Increase the number
//          </button>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [pending, setPending] = useState(0);
//    const [completed, setCompleted] = useState(0);

//    async function handleClick() {
//       setPending((p) => p + 1);
//       await delay(3000);
//       setPending((p) => p - 1);
//       setCompleted((c) => c + 1);
//    }

//    return (
//       <>
//          <h3>Pending: {pending}</h3>
//          <h3>Completed: {completed}</h3>
//          <button onClick={handleClick}>Buy</button>
//       </>
//    );
// };

// function delay(ms) {
//    return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//    });
// }

//========================================================================================================================================================

// const App = () => {
//    const [position, setPosition] = useState({
//       x: 0,
//       y: 0,
//    });
//    return (
//       <div
//          onPointerMove={(e) => {
//             setPosition({
//                x: e.clientX,
//                y: e.clientY,
//             });
//          }}
//          style={{
//             position: "relative",
//             width: "100vw",
//             height: "100vh",
//          }}
//       >
//          <div
//             style={{
//                position: "absolute",
//                backgroundColor: "red",
//                borderRadius: "50%",
//                transform: `translate(${position.x}px, ${position.y}px)`,
//                left: -10,
//                top: -10,
//                width: 20,
//                height: 20,
//             }}
//          />
//       </div>
//    );
// };

//========================================================================================================================================================


// const App = () => {
//    const [person, setPerson] = useState({
//       firstName: "Barbara",
//       lastName: "Hepworth",
//       email: "bhepworth@sculpture.com",
//    });

//    function handleFirstNameChange(e) {
//       setPerson({
//          ...person,
//          firstName: e.target.value,
//       });
//    }

//    function handleLastNameChange(e) {
//       setPerson({
//          ...person,
//          lastName: e.target.value,
//       });
//    }

//    function handleEmailChange(e) {
//       setPerson({
//          ...person,
//          email: e.target.value,
//       });
//    }

//    return (
//       <>
//          <label>
//             First name:
//             <input value={person.firstName} onChange={handleFirstNameChange} />
//          </label>
//          <label>
//             Last name:
//             <input value={person.lastName} onChange={handleLastNameChange} />
//          </label>
//          <label>
//             Email:
//             <input value={person.email} onChange={handleEmailChange} />
//          </label>
//          <p>
//             {person.firstName} {person.lastName} ({person.email})
//          </p>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [person, setPerson] = useState({
//       firstName: "Barbara",
//       lastName: "Hepworth",
//       email: "bhepworth@sculpture.com",
//    });

//    function handleChange(e) {
//       setPerson({
//          ...person,
//          [e.target.name]: e.target.value,
//       });
//    }

//    return (
//       <>
//          <label>
//             First name:
//             <input
//                name="firstName"
//                value={person.firstName}
//                onChange={handleChange}
//             />
//          </label>
//          <label>
//             Last name:
//             <input
//                name="lastName"
//                value={person.lastName}
//                onChange={handleChange}
//             />
//          </label>
//          <label>
//             Email:
//             <input name="email" value={person.email} onChange={handleChange} />
//          </label>
//          <p>
//             {person.firstName} {person.lastName} ({person.email})
//          </p>
//       </>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    const [player, setPlayer] = useState({
//       firstName: "Ranjani",
//       lastName: "Shettar",
//       score: 10,
//    });

//    function handlePlusClick() {
//       setPlayer({
// 			...player,
// 			score: player.score + 1
// 		})
//    }

//    function handleFirstNameChange(e) {
//       setPlayer({
//          ...player,
//          firstName: e.target.value,
//       });
//    }

//    function handleLastNameChange(e) {
//       setPlayer({
//          lastName: e.target.value,
//       });
//    }

//    return (
//       <>
//          <label>
//             Score: <b>{player.score}</b>{" "}
//             <button onClick={handlePlusClick}>+1</button>
//          </label>
//          <label>
//             First name:
//             <input value={player.firstName} onChange={handleFirstNameChange} />
//          </label>
//          <label>
//             Last name:
//             <input value={player.lastName} onChange={handleLastNameChange} />
//          </label>
//       </>
//    );
// };

//========================================================================================================================================================

// const initialPosition = {
//     x: 0,
//     y: 0,
// };

// const App = () => {
//    const [shape, setShape] = useState({
//       color: "orange",
//       position: initialPosition,
//    });

//    // function handleMove(dx, dy) {
//    //    shape.position.x += dx;
//    //    shape.position.y += dy;
//    // }

// 	function handleMove(dx, dy) {
// 		setShape({
// 			...shape,
// 			position: {
// 				x: shape.position.x + dx,
// 				y: shape.position.y + dy,
// 		  },
// 		})
// 	}

//    function handleColorChange(e) {
//       setShape({
//          ...shape,
//          color: e.target.value,
//       });
//    }

//    return (
//       <>
//          <select value={shape.color} onChange={handleColorChange}>
//             <option value="orange">orange</option>
//             <option value="lightpink">lightpink</option>
//             <option value="aliceblue">aliceblue</option>
//          </select>
//          <Background position={initialPosition} />
//          <Box color={shape.color} position={shape.position} onMove={handleMove}>
//             Drag me!
//          </Box>
//       </>
//    );
// };

//========================================================================================================================================================


// let nextId = 0;

// const App = () => {
//    const [name, setName] = useState("");
//    const [artists, setArtists] = useState([]);

//    return (
//       <>
//          <h1>Inspiring sculptors:</h1>
//          <input value={name} onChange={(e) => setName(e.target.value)} />
//          <button
//             onClick={() => {
//                setArtists([...artists, { id: nextId++, name: name }]);
//             }}
//          >
//             Add
//          </button>
//          <ul>
//             {artists.map((artist) => (
//                <li key={artist.id}>{artist.name}</li>
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================


// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye' },
//     { id: 2, name: 'Louise Nevelson' },
// ];

// const App = () => {
//    const [artists, setArtists] = useState(initialArtists);

//    return (
//       <>
//          <h1>Inspiring sculptors:</h1>
//          <ul>
//             {artists.map((artist) => (
//                <li key={artist.id}>
//                   {artist.name}{" "}
//                   <button
//                      onClick={() => {
//                         setArtists(artists.filter((a) => a.id !== artist.id));
//                      }}
//                   >
//                      Delete
//                   </button>
//                </li>
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================


// let initialShapes = [
//     { id: 0, type: 'circle', x: 50, y: 100 },
//     { id: 1, type: 'square', x: 150, y: 100 },
//     { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// const App = () => {
//    const [shapes, setShapes] = useState(initialShapes);

//    function handleClick() {
//       const nextShapes = shapes.map((shape) => {
//          if (shape.type === "square") {
//             // No change
//             return shape;
//          } else {
//             // Return a new circle 50px below
//             return {
//                ...shape,
//                y: shape.y + 50,
//             };
//          }
//       });
//       // Re-render with the new array
//       setShapes(nextShapes);
//    }

//    return (
//       <>
//          <button onClick={handleClick}>Move circles down!</button>
//          {shapes.map((shape) => (
//             <div
//                key={shape.id}
//                style={{
//                   background: "purple",
//                   position: "absolute",
//                   left: shape.x,
//                   top: shape.y,
//                   borderRadius: shape.type === "circle" ? "50%" : "",
//                   width: 20,
//                   height: 20,
//                }}
//             />
//          ))}
//       </>
//    );
// };

//========================================================================================================================================================

// let initialCounters = [0, 0, 0];

// const App = () => {
//    const [counters, setCounters] = useState(initialCounters);

//    function handleIncrementClick(index) {
//       const nextCounters = counters.map((c, i) => {
//          if (i === index) {
//             // Increment the clicked counter
//             return c + 1;
//          } else {
//             // The rest haven't changed
//             return c;
//          }
//       });
//       setCounters(nextCounters);
//    }

//    return (
//       <ul>
//          {counters.map((counter, i) => (
//             <li key={i}>
//                {counter}
//                <button
//                   onClick={() => {
//                      handleIncrementClick(i);
//                   }}
//                >
//                   +1
//                </button>
//             </li>
//          ))}
//       </ul>
//    );
// };

//========================================================================================================================================================

// let nextId = 3;
// const initialArtists = [
//    { id: 0, name: "Marta Colvin Andrade" },
//    { id: 1, name: "Lamidi Olonade Fakeye" },
//    { id: 2, name: "Louise Nevelson" },
// ];

// const App = () => {
//    const [name, setName] = useState(""); // Строка для хранения имени и функция для ее обновления
//    const [artists, setArtists] = useState(initialArtists); // Список искусствоведов и функция для его обновления

//    function handleClick() { // Функция, вызываемая при нажатии на кнопку
//       const insertAt = 1; // Определяем позицию для вставки нового элемента

//       const nextArtists = [
//          ...artists.slice(0, insertAt), // Копируем элементы до позиции вставки
//          { id: nextId++, name: name }, // Создаем нового искусствоведа с уникальным ID и именем
//          ...artists.slice(insertAt), // Копируем элементы после позиции вставки
//       ];
//       setArtists(nextArtists); // Обновляем список искусствоведов с новым списком
//       setName(""); // Очищаем поле ввода имени
//    }

//    return (
//       <>
//          <h1>Inspiring sculptors:</h1>
//          <input value={name} onChange={(e) => setName(e.target.value)} /> // Поле ввода с привязанным значением
//          <button onClick={handleClick}>Insert</button> // Кнопка вызывает функцию handleClick при нажатии
//          <ul>
//             {artists.map((artist) => ( // Перебираем искусствоведов и отображаем их имена
//                <li key={artist.id}>{artist.name}</li> // Отображаем имя искусствоведа
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================

// let nextId = 3;

// const initialList = [
//     { id: 0, title: 'Big Bellies' },
//     { id: 1, title: 'Lunar Landscape' },
//     { id: 2, title: 'Terracotta Army' },
// ];

// const App = () => {
//    const [list, setList] = useState(initialList);

//    function handleClick() {
//       const nextList = [...list];
//       nextList.reverse();
//       setList(nextList);
//    }

//    return (
//       <>
//          <button onClick={handleClick}>Reverse</button>
//          <ul>
//             {list.map((artwork) => (
//                <li key={artwork.id}>{artwork.title}</li>
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================

// let nextId = 3;
// const initialList = [
//     { id: 0, title: 'Big Bellies', seen: false },
//     { id: 1, title: 'Lunar Landscape', seen: false },
//     { id: 2, title: 'Terracotta Army', seen: true },
// ];

// const App = () => {
//    const [myList, setMyList] = useState(initialList);
//    const [yourList, setYourList] = useState(initialList);

//    function handleToggleMyList(artworkId, nextSeen) {
//       setMyList(
//          myList.map((artwork) => {
//             if (artwork.id === artworkId) {
//                // Create a *new* object with changes
//                return { ...artwork, seen: nextSeen };
//             } else {
//                // No changes
//                return artwork;
//             }
//          })
//       );
//    }

//    function handleToggleYourList(artworkId, nextSeen) {
//       setYourList(
//          yourList.map((artwork) => {
//             if (artwork.id === artworkId) {
//                // Create a *new* object with changes
//                return { ...artwork, seen: nextSeen };
//             } else {
//                // No changes
//                return artwork;
//             }
//          })
//       );
//    }

//    return (
//       <>
//          <h1>Art Bucket List</h1>
//          <h2>My list of art to see:</h2>
//          <ItemList artworks={myList} onToggle={handleToggleMyList} />
//          <h2>Your list of art to see:</h2>
//          <ItemList artworks={yourList} onToggle={handleToggleYourList} />
//       </>
//    );
// };

// function ItemList({ artworks, onToggle }) {
//    return (
//       <ul>
//          {artworks.map((artwork) => (
//             <li key={artwork.id}>
//                <label>
//                   <input
//                      type="checkbox"
//                      checked={artwork.seen}
//                      onChange={(e) => {
//                         onToggle(artwork.id, e.target.checked);
//                      }}
//                   />
//                   {artwork.title}
//                </label>
//             </li>
//          ))}
//       </ul>
//    );
// }

//========================================================================================================================================================

// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye' },
//     { id: 2, name: 'Louise Nevelson' },
// ];

// const App = () => {
//    const [artists, setArtists] = useState(initialArtists);

//    return (
//       <>
//          <h1>Inspiring sculptors:</h1>
//          <ul>
//             {artists.map((artist) => (
//                <li key={artist.id}>
//                   {artist.name}{" "}
//                   <button
//                      onClick={() => {
//                         setArtists(artists.filter((a) => a.id !== artist.id));
//                      }}
//                   >
//                      Delete
//                   </button>
//                </li>
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================

// let initialShapes = [
//    { id: 0, type: "circle", x: 50, y: 100 },
//    { id: 1, type: "square", x: 150, y: 100 },
//    { id: 2, type: "circle", x: 250, y: 100 },
// ];

// const App = () => {
//    const [shapes, setShapes] = useState(initialShapes);

//    function handleClick() {
//       const nextShapes = shapes.map((shape) => {
//          if (shape.type === "square") {
//             // No change
//             return shape;
//          } else {
//             // Return a new circle 50px below
//             return {
//                ...shape,
//                y: shape.y + 50,
//             };
//          }
//       });
//       // Re-render with the new array
//       setShapes(nextShapes);
//    }

//    return (
//       <>
//          <button onClick={handleClick}>Move circles down!</button>
//          {shapes.map((shape) => (
//             <div
//                key={shape.id}
//                style={{
//                   background: "purple",
//                   position: "absolute",
//                   left: shape.x,
//                   top: shape.y,
//                   borderRadius: shape.type === "circle" ? "50%" : "",
//                   width: 20,
//                   height: 20,
//                }}
//             />
//          ))}
//       </>
//    );
// };

//========================================================================================================================================================

// let initialCounters = [0, 0, 0];

// const App = () => {
//    const [counters, setCounters] = useState(initialCounters);

//    function handleIncrementClick(index) {
//       const nextCounters = counters.map((c, i) => {
//          if (i === index) {
//             // Increment the clicked counter
//             return c + 1;
//          } else {
//             // The rest haven't changed
//             return c;
//          }
//       });
//       setCounters(nextCounters);
//    }

//    return (
//       <ul>
//          {counters.map((counter, i) => (
//             <li key={i}>
//                {counter}
//                <button
//                   onClick={() => {
//                      handleIncrementClick(i);
//                   }}
//                >
//                   +1
//                </button>
//             </li>
//          ))}
//       </ul>
//    );
// };

//========================================================================================================================================================


// let nextId = 3;
// const initialArtists = [
//    { id: 0, name: "Marta Colvin Andrade" },
//    { id: 1, name: "Lamidi Olonade Fakeye" },
//    { id: 2, name: "Louise Nevelson" },
// ];

// const App = () => {
//    const [name, setName] = useState("");
//    const [artists, setArtists] = useState(initialArtists);

//    function handleClick() {
//       const insertAt = 1; // Could be any index
//       const nextArtists = [
//          // Items before the insertion point:
//          ...artists.slice(0, insertAt),
//          // New item:
//          { id: nextId++, name: name },
//          // Items after the insertion point:
//          ...artists.slice(insertAt),
//       ];
//       setArtists(nextArtists);
//       setName("");
//    }

//    return (
//       <>
//          <h1>Inspiring sculptors:</h1>
//          <input value={name} onChange={(e) => setName(e.target.value)} />
//          <button onClick={handleClick}>Insert</button>
//          <ul>
//             {artists.map((artist) => (
//                <li key={artist.id}>{artist.name}</li>
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================

// let nextId = 3;
// const initialList = [
//    { id: 0, title: "Big Bellies" },
//    { id: 1, title: "Lunar Landscape" },
//    { id: 2, title: "Terracotta Army" },
// ];

// const App = () => {
//    const [list, setList] = useState(initialList);

//    function handleClick() {
//       const nextList = [...list];
//       nextList.reverse();
//       setList(nextList);
//    }

//    return (
//       <>
//          <button onClick={handleClick}>Reverse</button>
//          <ul>
//             {list.map((artwork) => (
//                <li key={artwork.id}>{artwork.title}</li>
//             ))}
//          </ul>
//       </>
//    );
// };

//========================================================================================================================================================

// let nextId = 3;
// const initialList = [
//     { id: 0, title: 'Big Bellies', seen: false },
//     { id: 1, title: 'Lunar Landscape', seen: false },
//     { id: 2, title: 'Terracotta Army', seen: true },
// ];

// const App = () => {
//    const [myList, setMyList] = useState(initialList);
//    const [yourList, setYourList] = useState(initialList);

//    function handleToggleMyList(artworkId, nextSeen) {
//       setMyList(
//          myList.map((artwork) => {
//             if (artwork.id === artworkId) {
//                // Create a *new* object with changes
//                return { ...artwork, seen: nextSeen };
//             } else {
//                // No changes
//                return artwork;
//             }
//          })
//       );
//    }

//    function handleToggleYourList(artworkId, nextSeen) {
//       setYourList(
//          yourList.map((artwork) => {
//             if (artwork.id === artworkId) {
//                // Create a *new* object with changes
//                return { ...artwork, seen: nextSeen };
//             } else {
//                // No changes
//                return artwork;
//             }
//          })
//       );
//    }

//    return (
//       <>
//          <h1>Art Bucket List</h1>
//          <h2>My list of art to see:</h2>
//          <ItemList artworks={myList} onToggle={handleToggleMyList} />
//          <h2>Your list of art to see:</h2>
//          <ItemList artworks={yourList} onToggle={handleToggleYourList} />
//       </>
//    );
// };

// function ItemList({ artworks, onToggle }) {
//    return (
//       <ul>
//          {artworks.map((artwork) => (
//             <li key={artwork.id}>
//                <label>
//                   <input
//                      type="checkbox"
//                      checked={artwork.seen}
//                      onChange={(e) => {
//                         onToggle(artwork.id, e.target.checked);
//                      }}
//                   />
//                   {artwork.title}
//                </label>
//             </li>
//          ))}
//       </ul>
//    );
// }


//========================================================================================================================================================

// // Создаем начальный список продуктов с их идентификаторами и количеством
// const initialProducts = [
//    {
//       id: 0,
//       name: "Baklava",
//       count: 1,
//    },
//    {
//       id: 1,
//       name: "Cheese",
//       count: 5,
//    },
//    {
//       id: 2,
//       name: "Spaghetti",
//       count: 2,
//    },
// ];

// const App = () => {
//    // Создаем состояние products, которое инициализируется начальным списком
//    const [products, setProducts] = useState(initialProducts);

//    // Функция handleIncreaseClick вызывается при нажатии кнопки "+" у продукта
//    function handleIncreaseClick(productId) {
//       // Мы обновляем состояние products с помощью setProducts
//       setProducts(
//          products.map((product) => {
//             // Мы перебираем каждый продукт в массиве
//             if (product.id === productId) {
//                // Если id продукта соответствует id, который нужно увеличить
//                return {
//                   // Мы создаем *новый* объект (продукт) с обновленным количеством
//                   ...product, // Копируем все свойства из текущего продукта
//                   count: product.count + 1, // Увеличиваем счетчик на 1
//                };
//             } else {
//                // Если id не соответствует, это другие продукты, их не трогаем
//                return product; // Возвращаем текущий продукт без изменений
//             }
//          })
//       );
//    }

//    return (
//       <ul>
//          {products.map((product) => (
//             <li key={product.id}>
//                {product.name} (<b>{product.count}</b>)
//                <button
//                   onClick={() => {
//                      handleIncreaseClick(product.id);
//                   }}
//                >
//                   +
//                </button>
//             </li>
//          ))}
//       </ul>
//    );
// };

// const initialProducts = [
//    {
//       id: 0,
//       name: "Baklava",
//       count: 1,
//    },
//    {
//       id: 1,
//       name: "Cheese",
//       count: 5,
//    },
//    {
//       id: 2,
//       name: "Spaghetti",
//       count: 2,
//    },
// ];

// const App = () => {
//    const [products, setProducts] = useState(initialProducts);

//    function handleIncreaseClick(productId) {
// 		setProducts (
// 			products.map((product) => {
// 				if (product.id === productId) {
// 					return {
// 						...product,
// 						count: product.count + 1
// 					}
// 				} else {
// 					return product;
// 				}
// 			})
// 		)
//    }

//    return (
// 		<ul>
// 			{products.map((product) => (
// 				<li key={product.id}>
// 					{product.name} (<b>{product.count}</b>)
// 					<button onClick={() => {
// 						handleIncreaseClick(product.id)
// 					}}>
// 					+
// 				</button>
// 				</li>
// 			))}
// 		</ul>
//    );
// };


//========================================================================================================================================================

// const initialProducts = [
//    {
//       id: 0,
//       name: "Baklava",
//       count: 1,
//    },
//    {
//       id: 1,
//       name: "Cheese",
//       count: 5,
//    },
//    {
//       id: 2,
//       name: "Spaghetti",
//       count: 2,
//    },
// ];

// const App = () => {
//    const [products, setProducts] = useState(initialProducts);

//    function handleIncreaseClick(productId) {
//       setProducts(
//          products.map((product) => {
//             if (product.id === productId) {
//                return {
//                   ...product,
//                   count: product.count + 1,
//                };
//             } else {
//                return product;
//             }
//          })
//       );
//    }

// 	function handleDecreaseClick(productId) {
// 		let nextProducts = products.map((product) => {
// 			 if (product.id === productId) {
// 				  return {
// 						...product,
// 						count: product.count - 1,
// 				  };
// 			 } else {
// 				  return product;
// 			 }
// 		});
// 		nextProducts = nextProducts.filter(
// 			 (p) => p.count > 0
// 		);
// 		setProducts(nextProducts);
//   }

//    return (
//       <ul>
//          {products.map((product) => (
//             <li key={product.id}>
//                {product.name} (<b>{product.count}</b>)
//                <button
//                   onClick={() => {
//                      handleIncreaseClick(product.id);
//                   }}
//                >
//                   +
//                </button>
//                <button
//                   onClick={() => {
//                      handleDecreaseClick(product.id);
//                   }}
//                >
//                   –
//                </button>
//             </li>
//          ))}
//       </ul>
//    );
// };

//========================================================================================================================================================


let nextId = 3;
const initialTodos = [
   { id: 0, title: "Buy milk", done: true },
   { id: 1, title: "Eat tacos", done: false },
   { id: 2, title: "Brew tea", done: false },
];

const App = () => {
   const [todos, setTodos] = useState(initialTodos);

	function handleAddTodo(title) {
      setTodos([
         ...todos,
         {
            id: nextId++,
            title: title,
            done: false,
         },
      ]);
   }

   function handleChangeTodo(nextTodo) {
      const todo = todos.find((t) => t.id === nextTodo.id);
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
   }

   function handleDeleteTodo(todoId) {
      const index = todos.findIndex((t) => t.id === todoId);
      todos.splice(index, 1);
   }

   return (
      <>
         <AddTodo onAddTodo={handleAddTodo} />
         <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
         />
      </>
   );
};







export default App;
