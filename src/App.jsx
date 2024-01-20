import { Routes, Route, useNavigate } from "react-router-dom";
import { AppRoutes } from "./pages/RouteObjects/RouteObjects.js";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Log from "./pages/Login/Login.jsx";
import Regist from "./pages/Registration/Registration.jsx";
import PopEx from "./pages/PopExit/Exit.jsx";
import PopBrow from "./pages/PopBrowse/PopBrowse.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import NotFound from "./pages/NotFound/NotFoundPage.jsx";
import { useState } from "react";
import { loginKanban } from "./Api.js";

export function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  async function setAuth(loginData) {
    await loginKanban(loginData).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate(AppRoutes.MAIN);
    });
  }

  function exit() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(AppRoutes.LOGIN);
  }

  // const isAuth = true;
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={user} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.POPEXIT} element={<PopEx exit={exit} />} />
        <Route path={AppRoutes.POPBROWSE} element={<PopBrow />} />
      </Route>

      <Route path={AppRoutes.LOGIN} element={<Log setAuth={setAuth} />} />
      <Route path={AppRoutes.REGISTRATION} element={<Regist />} />
      <Route path={AppRoutes.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}
