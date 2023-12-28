import { Routes, Route } from "react-router-dom";
import AppRoutes from "./pages/RouteObjects/RouteObjects.js";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Log from "./pages/Login/Login.jsx";
import Regist from "./pages/Registration/Registration.jsx";
import PopEx from "./pages/PopExit/Exit.jsx";
import PopBrow from "./pages/PopBrowse/PopBrowse.jsx";
function App() {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path={AppRoutes.LOGIN} element={<Log />} />
      <Route path={AppRoutes.REGISTRATION} element={<Regist />} />
      <Route path={AppRoutes.POPEXIT} element={<PopEx />} />
      <Route path={AppRoutes.POPBROWSE} element={<PopBrow />} />
      <Route path={AppRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
