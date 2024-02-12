import "../../App.css";
import Wrapper from "../../components/Wrapper/Wrapper.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../../data.js";
import { Outlet } from "react-router-dom";
import { getKanban } from "../../Api.js";
import useUser from "../../hooks/useUser.jsx";
import { LoaderContainer, LoaderGif } from "./MainPage.stuled.js";
import useTasks from "../../hooks/useTasks.jsx";

function App() {
  const { updateTask, tasks } = useTasks();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    getKanban({ user })
      .then((data) => {
        updateTask(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [user]);

  return (
    <>
      <Wrapper>
        <Outlet />

        <Header />
        {isLoading ? (
          <LoaderContainer>
            <LoaderGif>
              <img src="https://usagif.com/wp-content/uploads/loading-77.gif" />
            </LoaderGif>
          </LoaderContainer>
        ) : (
          <Main cards={tasks} />
        )}
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
