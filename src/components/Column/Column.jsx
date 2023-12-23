import Card from "../Card/Card.jsx";
import { GlobalStyle } from "../GlobalStyle.js";

export default function Column({ title, cardList }) {
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
