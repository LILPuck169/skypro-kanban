import { Link } from "react-router-dom";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";
import Calendar from "../Calendar/Calendar";
import React, { useState } from "react";
import { addTask } from "../../Api";

export default function PopNewCard() {
  const [selected, setSelected] = React.useState(null);
  const [newCard, setNewCard] = useState({
    title: "",
    topic: "",
    description: "",
  });

  async function onButtonSubmit() {
    try {
      const newTask = await addTask({ title, topic, description });
      console.log("Задача успешно добавлена:", newTask);
      const updatedTasks = [...tasks, newCard];
      updateTask(updatedTasks);
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
      alert(error.message);
    }
  }

  //  function onButtonSubmit() {
  //    const cardData = {
  //      ...newCard,
  //      data: selected,
  //    };
  //  }

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            {/* <Link to={AppRoutes.MAIN}>Закрыть </Link> */}
            <Link to={AppRoutes.MAIN} className="pop-new-card__close">
              &#10006;
            </Link>
            {/* <a href="#" className="pop-new-card__close">
              &#10006;
            </a> */}
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={newCard.title}
                    onChange={(e) =>
                      setNewCard({ ...newCard, title: e.target.value })
                    }
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newCard.description}
                    onChange={(e) =>
                      setNewCard({ ...newCard, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </form>
              <Calendar selected={selected} setSelected={setSelected} />
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  value="Web Design"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                />
                <label htmlFor="radio1">Web Design</label>

                <input
                  type="radio"
                  value="Research"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                />
                <label htmlFor="radio1">Research</label>

                <input
                  type="radio"
                  value="Copywriting"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                />
                <label htmlFor="radio1">Copywriting</label>
              </div>
            </div>

            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={onButtonSubmit}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
