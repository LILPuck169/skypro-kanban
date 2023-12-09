import Column from "../Column/Column";
export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* Тут начало  общего блока! */}

            {/* Окончание блоково компонент */}
            <Column title={`Доллар забываем!`} />
            <Column title={`Доллар забываем!`} />
            <Column title={`Доллар забываем!`} />
            <Column title={`Доллар забываем!`} />
            <Column title={`Доллар забываем!`} />
            {/* ................................................................. */}
          </div>
        </div>
      </div>
    </main>
  );
}
