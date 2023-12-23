import Column from "../Column/Column";
import { statusList } from "../../data.js";
import { GlobalStyle } from "../GlobalStyle.js";
import { Container } from "../Header/Header.styled.js";
export default function Main({ cards }) {
  return (
    <main className="main">
      <Container>
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
// Проверка отправки
