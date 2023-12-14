import Card from "../Card/Card";

const tasks = [
  {
    id: 1,
    title: "Название задачи ",
    date: "30.10.2023",
    theme: "green",
    description: "Research",
  },
  {
    id: 2,
    title: "Название задачи ",
    date: "31.10.2023",
    theme: "orange",
    description: "Web-designer",
  },
  {
    id: 3,
    title: "Название задачи ",
    date: "31.10.2023",
    theme: "purple",
    description: "Web-designer",
  },
];

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {tasks.map((task) => (
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
