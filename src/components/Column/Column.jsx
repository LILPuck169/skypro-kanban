import Card from "../Card/Card.jsx";
import { ColumTitP, ColumnTitle, MainColumn, Cards } from "./Column.styled.js";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        {/* Не работает ColumnTitP */}
        <ColumTitP>{title}</ColumTitP>
      </ColumnTitle>

      <Cards>
        {cardList.map((task) => (
          <Card
            key={task._id}
            title={task.title}
            date={task.date}
            topic={task.topic}
            id={task._id}
            // description={task.description}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
