import Column from "../Column/Column";
import { statusList } from "../../data.js";
import { Container } from "../Header/Header.styled.js";
import { MainBLock, MainContet, MainMain } from "./Main.styled.js";

export default function Main({ cards }) {
  return (
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
  );
}
