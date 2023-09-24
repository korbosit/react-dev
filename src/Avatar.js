import { getImageUrl } from './utils.js';

// export default function Avatar({ person, size }) {
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

function Avatar({ person, size }) {
   let thumbnailSize = "s";
   if (size > 90) {
      thumbnailSize = "b";
   }
   return (
      <img
         className="avatar"
         src={getImageUrl(person, thumbnailSize)}
         alt={person.name}
         width={size}
         height={size}
      />
   );
}

export default Avatar;
