import Card from "../Card/Card";
import { cardList } from "../../data.js";

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {cardList.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            date={task.date}
            theme={task.theme}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
}
