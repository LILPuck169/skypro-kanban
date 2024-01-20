import "../../App.css";
import Wrapper from "../../components/Wrapper/Wrapper.jsx";
import PopExit from "../../components/Pop/PopExit.jsx";
import PopNewCard from "../../components/Pop/PopNewCard.jsx";
import PopBrowse from "../../components/Pop/PopBrowse.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../../data.js";
import { Outlet } from "react-router-dom";
import { getKanban, postKanban } from "../../Api.js";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getKanban().then((data) => {
      setCards(data.tasks);
      setIsLoading(false);
    });
  }, []);

  async function addCard() {
    const newCard = {
      id: cards.length + 1,
      title: "Название задачи ",
      date: "30.10.2023",
      theme: "green",
      topic: "Research",
      status: "Без статуса",
    };
    await postKanban(newCard);
    setCards([...cards, newCard]);
  }

  // //Тут загрузку лоада
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);
  // }, []);

  return (
    <>
      <Wrapper>
        <Outlet />
        {/* <PopExit /> */}
        {/* <PopNewCard /> */}
        {/* <PopBrowse /> */}
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
