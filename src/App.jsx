import { Routes, Route, useNavigate } from "react-router-dom";
import { AppRoutes } from "./pages/RouteObjects/RouteObjects.js";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Log from "./pages/Login/Login.jsx";
import Regist from "./pages/Registration/Registration.jsx";
import PopEx from "./pages/PopExit/Exit.jsx";
import PopBrow from "./pages/PopBrowse/PopBrowse.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import NotFound from "./pages/NotFound/NotFoundPage.jsx";
import AddCardPage from "./pages/AddCardPages/AddCardPages.jsx";
import EditTask from "./pages/EditTask/EditTask.jsx";

export function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.POPEXIT} element={<PopEx />} />
          <Route path={AppRoutes.POPBROWSE} element={<PopBrow />} />
          <Route path={AppRoutes.ADD_CARD} element={<AddCardPage />} />
          <Route path={AppRoutes.EDIT} element={<EditTask />} />
        </Route>
      </Route>

      <Route path={AppRoutes.LOGIN} element={<Log />} />
      <Route path={AppRoutes.REGISTRATION} element={<Regist />} />
      <Route path={AppRoutes.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}
