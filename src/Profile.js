import Avatar from "./Avatar";
import { getImageUrl } from "./utils";

 
// const Profile = (props) => {
//    return (
//       <section className="profile">
//          <h2>{props.name}</h2>
//          <img
//             className="avatar"
//             src={getImageUrl(props.imageId)}
//             alt={props.name}
//             width={props.imageSize}
//             height={props.imageSize}
//          />
//          <ul>
//             <li>
//                <b>Profession: </b>
//                {props.profession}
//             </li>
//             <li>
//                <b>Awards: {props.rating} </b>
//                ({props.awards})
//             </li>
//             <li>
//                <b>Discovered: </b>
//                {props.discovery}
//             </li>
//          </ul>
//       </section>
//    );
// };

// const Profile = ({name, imageSize = 70, profession, awards, discovery, imageId}) => {
//    return (
// 		<section className="profile">
// 		<h2>{name}</h2>
// 		<img
// 			className="avatar"
// 			src = {getImageUrl(imageId)}
// 			alt={name}
// 			width={imageSize}
// 			height={imageSize}
// 		/>
// 		<ul>
// 			<li>
// 				<b>Profession: </b>
// 				{profession}
// 			</li>
// 			<li>
// 				<b>Awards: {awards.length} </b>
// 				({awards.join(', ')})
// 			</li>
// 			<li>
// 				<b>Discovered: </b>
// 				{discovery}
// 			</li>
// 		</ul>
// 	</section>
//    );
// };

//========================================================================================================================================================

// Создаем компонент Profile, который отображает информацию о человеке
// function Profile({ person, imageSize = 70 }) {
//    // Получаем URL изображения для человека, используя функцию getImageUrl
//    const imageSrc = getImageUrl(person);

//    // Возвращаем разметку профиля с информацией о человеке
//    return (
//       <section className="profile">
// 			{/* // Отображаем имя человека */}
//          <h2>{person.name}</h2> 
//          <img
//             className="avatar"
//             src={imageSrc} // Подставляем URL изображения
//             alt={person.name} // Отображаем имя человека как альтернативный текст
//             width={imageSize} // Устанавливаем ширину изображения
//             height={imageSize} // Устанавливаем высоту изображения
//          />
//          <ul>
//             <li>
// 				{/* // Отображаем профессию */}
//                <b>Profession:</b> {person.profession} 
//                человека
//             </li>
//             <li>
// 				{/* // Отображаем список наград */}
//                <b>Awards: {person.awards.length} </b>({person.awards.join(", ")}
//                ) 
//             </li>
//             <li>
// 				{/* // Отображаем, что человек открыл */}
//                <b>Discovered: </b>
//                {person.discovery} 
//             </li>
//          </ul>
//       </section>
//    );
// }

//========================================================================================================================================================

//========================================================================================================================================================


// const Profile = ({ person, imageSize = 70 }) => {
//    const imageSrc = getImageUrl(person.imageId);

//    return (
//       <section className="profile">
//          <h2>{person.name}</h2> 
//          <img
//             className="avatar"
//             src={imageSrc} // Подставляем URL изображения
//             alt={person.name} // Отображаем имя человека как альтернативный текст
//             width={imageSize} // Устанавливаем ширину изображения
//             height={imageSize} // Устанавливаем высоту изображения
//          />
//          <ul>
//             <li>
//                <b>Profession:</b> {person.profession} 
//             </li>
//             <li>
//                <b>Awards: {person.awards.length} </b>({person.awards.join(", ")}
//                )
//             </li>
//             <li>
//                <b>Discovered: </b>
//                {person.discovery} 
//             </li>
//          </ul>
//       </section>
//    );
// };

//========================================================================================================================================================


function Profile() {
   return (
      <Avatar
         size={40}
         person={{
            name: "Gregorio Y. Zara",
            imageId: "7vQD0fP",
         }}
      />
   );
}

export default Profile;