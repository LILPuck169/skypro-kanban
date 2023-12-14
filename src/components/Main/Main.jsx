import Column from "../Column/Column";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* Тут начало  общего блока! */}

            {/* Окончание блоково компонент */}
            <Column title={`Без статуса`} />
            <Column title={`Нужно сделать`} />
            <Column title={`В работе`} />
            <Column title={`Тестирование`} />
            <Column title={`Готово`} />
            {/* ................................................................. */}
          </div>
        </div>
      </div>
    </main>
  );
}
