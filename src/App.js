import React from 'react';
import './App.css';


// const App = () => {

// 	function handleClick() {
// 		alert('You clicked me!');
//   }

//    return (
// 		<button onClick={handleClick}>Click me</button>
//    );
// };

//========================================================================================================================================================

// function AlertButton({ message, children }) {
//    return <button onClick={() => alert(message)}>{children}</button>;
// }

// const App = () => {
//    return (
//       <div>
//          <AlertButton message="Playing!">Play Movie</AlertButton>
//          <AlertButton message="Uploading!">Upload Image</AlertButton>
//       </div>
//    );
// };

//========================================================================================================================================================

// function Button({ onClick, children }) {
//    return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//    function handlePlayClick() {
//       alert(`Playing ${movieName}!`);
//    }

//    return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
// }

// function UploadButton() {
//    return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }

// const App = () => {
//    return (
//       <div>
//          <PlayButton movieName="Kiki's Delivery Service" />
//          <UploadButton />
//       </div>
//    );
// };

//========================================================================================================================================================

// function Button({ onSmash, children }) {
// 	return <button onClick={onSmash}>{children}</button>;
// }

// const App = () => {
//    return (
//       <div>
//          <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
//          <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
//       </div>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    return (
//       <Toolbar
//          onPlayMovie={() => alert("Playing!")}
//          onUploadImage={() => alert("Uploading!")}
//       />
//    );
// };

// function Toolbar({ onPlayMovie, onUploadImage }) {
//    return (
//       <div>
//          <Button onClick={onPlayMovie}>Play Movie</Button>
//          <Button onClick={onUploadImage}>Upload Image</Button>
//       </div>
//    );
// }

// function Button({ onClick, children }) {
// 	return <button onClick={onClick}>{children}</button>;
// }

//========================================================================================================================================================

// const App = () => {
//    return (
//       <div
//          className="Toolbar"
//          onClick={() => {
//             alert("You clicked on the toolbar!");
//          }}
//       >
//          <button onClick={() => alert("Playing!")}>Play Movie</button>
//          <button onClick={() => alert("Uploading!")}>Upload Image</button>
//       </div>
//    );
// };

//========================================================================================================================================================

// function Button({ onClick, children }) {
//    return (
//       <button
//          onClick={(e) => {
//             e.stopPropagation();
//             onClick();
//          }}
//       >
//          {children}
//       </button>
//    );
// }

// const App = () => {
//    return (
//       <div
//          className="Toolbar"
//          onClick={() => {
//             alert("You clicked on the toolbar!");
//          }}
//       >
//          <Button onClick={() => alert("Playing!")}>Play Movie</Button>
//          <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
//       </div>
//    );
// };

//========================================================================================================================================================

// const App = () => {
//    return (
//       <form
//          onSubmit={(e) => {
//             e.preventDefault();
//             alert("Submitting!");
//          }}
//       >
//          <input />
//          <button>Send</button>
//       </form>
//    );
// };

//========================================================================================================================================================

const App = () => {
   function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === "black") {
         bodyStyle.backgroundColor = "white";
      } else {
         bodyStyle.backgroundColor = "black";
      }
   }

   return <button onClick={handleClick}>Toggle the lights</button>;
};




export default App;
