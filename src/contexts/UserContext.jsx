// import { useState } from "react";
// import { createContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../pages/RouteObjects/RouteObjects";

// export const UserContext = createContext(null);
// export function UserProvider({ children }) {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
//   const navigate = useNavigate();

//   function login(user) {
//     localStorage.setItem("user", JSON.stringify(user));
//     setUser(JSON.parse(localStorage.getItem("user")));
//     navigate(AppRoutes.MAIN);
//   }

//   function logout() {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate(AppRoutes.LOGIN);
//   }

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// //   const user = useContext(UserContext);
// //   if (!user) {
// //     throw new Error("Данные пользователя не были найдены");
// //   }
// //   return user;
