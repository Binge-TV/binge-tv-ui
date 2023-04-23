// import { useState, useEffect } from "react";
// import NavBar from "../../components/NavBar/NavBar.jsx";
// import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
// import ProfileService from "../../services/ProfileService.js";

// const Profiles = (props) => {
//   const [users, setUsers] = useState({});

//   useEffect(() => {
//     ProfileService.getAllProfiles()
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         alert.log(err);
//       });
//   }, []);

//   return (
//     <>
//       <NavBar
//         handleLogout={props.handleLogout}
//         users={props.users}
//         navItems={props.navItems}
//       />
//       <div>
//         <br />
//         <h1>Profiles</h1>
//       </div>

//       {users.length ? (
//         <>
//           <main className="bg-light">
//             <div className="container py-5 px-3">
//               <div
//                 className="row row-cols-2 row-cols-md-3 row-cols-lg-4 
//       row-cols-xl-5 g5 g-sm-3 g-xxl-5 px-sm-5 px-4"
//               >
//                 {users.map((user, idx) => (
//                   <ProfileCard user={user} key={user.userId} />
//                 ))}
//               </div>
//             </div>
//           </main>
//         </>
//       ) : (
//         <p>No profiles yet</p>
//       )}
//     </>
//   );
// };

// export default Profiles;
