import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import PopExit from "./components/Pop/PopExit.jsx";
import PopNewCard from "./components/Pop/PopNewCard.jsx";
import PopBrowse from "./components/Pop/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useState, useEffect } from "react";
import { cardList } from "./data.js";
function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      title: "Название задачи ",
      date: "30.10.2023",
      theme: "green",
      description: "Research",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        {isLoading ? (
          <div className="loader">
            <img src="https://cojo.ru/wp-content/uploads/2022/12/izobrazhenie-zagruzhaetsia-1.webp" />
          </div>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
