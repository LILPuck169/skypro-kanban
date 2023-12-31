import Card from "../Card/Card.jsx";
import { columTitP, ColumnTitle, MainColumn, Cards } from "./Column.styled.js";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        {/* Не работает ColumnTitP */}
        <columTitP>{title}</columTitP>
      </ColumnTitle>

      <Cards>
        {cardList.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            date={task.date}
            theme={task.theme}
            description={task.description}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
