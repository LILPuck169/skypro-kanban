// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Card from "./components/FirstCard.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import PopExit from "./components/Pop/PopExit.jsx";
import PopNewCard from "./components/Pop/PopNewCard.jsx";
import PopBrowse from "./components/Pop/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
function App() {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
