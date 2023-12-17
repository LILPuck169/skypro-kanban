import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import PopExit from "./components/Pop/PopExit.jsx";
import PopNewCard from "./components/Pop/PopNewCard.jsx";
import PopBrowse from "./components/Pop/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useState } from "react";
import { cardList } from "./data.js";
function App() {
  const [cards, setCards] = useState(cardList);

  function addCard() {
    const newCard = {
      id: cards.lenght + 1,
      title: "Название задачи ",
      date: "30.10.2023",
      theme: "green",
      description: "Research",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        <Main cards={cards} />
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
