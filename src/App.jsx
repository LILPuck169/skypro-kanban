import { Routes, Route } from "react-router-dom";
import AppRoutes from "./pages/RouteObjects/RouteObjects.js";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Log from "./pages/Login/Login.jsx";
import Regist from "./pages/Registration/Registration.jsx";
import PopEx from "./pages/PopExit/Exit.jsx";
import PopBrow from "./pages/PopBrowse/PopBrowse.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
export function App() {
  const isAuth = true;
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path={AppRoutes.LOGIN} element={<Log />} />
      <Route path={AppRoutes.REGISTRATION} element={<Regist />} />
      {/* Сделано, нужно display:block сделать */}
      <Route
        path={AppRoutes.POPEXIT}
        element={
          <PrivateRoute isAuth={isAuth}>
            <PopEx />
          </PrivateRoute>
        }
        // 123
        // path={AppRoutes.POPEXIT}
        // element={<PopEx />}
      />
      ]{/* Сделано, нужно display:block сделать */}
      <Route path={AppRoutes.POPBROWSE} element={<PopBrow />} />
      <Route path={AppRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
