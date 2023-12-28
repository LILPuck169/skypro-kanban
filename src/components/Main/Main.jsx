import Column from "../Column/Column";
import { statusList } from "../../data.js";
import { Container } from "../Header/Header.styled.js";
import { MainBLock, MainContet, MainMain } from "./Main.styled.js";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
export default function Main({ cards }) {
  return ReactDOM.render(
    <BrowserRouter>
      <MainMain>
        <Container>
          <MainBLock>
            <MainContet>
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </MainContet>
          </MainBLock>
        </Container>
      </MainMain>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
