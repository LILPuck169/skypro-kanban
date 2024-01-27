import "../../App.css";
import Wrapper from "../../components/Wrapper/Wrapper.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../../data.js";
import { Outlet } from "react-router-dom";
import { getKanban, postKanban } from "../../Api.js";
import useUser from "../../hooks/useUser.jsx";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    getKanban({ user }).then((data) => {
      setCards(data.tasks);
      setIsLoading(false);
    });
  }, [user]);

  return (
    <>
      <Wrapper>
        <Outlet />

        <Header />
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
