import { Link, useParams } from "react-router-dom";

import useTasks from "../../hooks/useTasks.jsx";
import Calendar from "../../components/Calendar/Calendar.jsx";
import { AppRoutes } from "../RouteObjects/RouteObjects.js";
import { useState } from "react";
import { changeTask } from "../../Api.js";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const currentTask = tasks?.find((item) => item._id === id);

  const [selected, setSelected] = useState(currentTask.date);
  const [changeCard, setChangeCard] = useState({
    status: currentTask.status,
    date: currentTask.date,
    title: currentTask.title,
    topic: currentTask.topic,
    description: currentTask.description,
  });

  async function change() {
    try {
      await changeTask({
        id,
        status: changeCard.status,
        date: selected,
        title: changeCard.date,
        topic: changeCard.topic,
        description: changeCard.description,
      }).then((data) => {
        updateTask({ data });
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{currentTask.title} </h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <div>
                <div>
                  <input
                    type="radio"
                    name="radios"
                    id="no-status"
                    value="Без статуса"
                    checked={changeCard.status === "Без статуса"}
                    onChange={(e) =>
                      setChangeCard({
                        ...changeCard,
                        status: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="no-status">Без статуса</label>

                  <input
                    type="radio"
                    name="radios"
                    id="to-do"
                    value="Нужно сделать"
                    checked={changeCard.status === "Нужно сделать"}
                    onChange={(e) =>
                      setChangeCard({
                        ...changeCard,
                        status: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="to-do">Нужно сделать</label>

                  <input
                    type="radio"
                    name="radios"
                    id="in-work"
                    value="В работе"
                    checked={changeCard.status === "В работе"}
                    onChange={(e) =>
                      setChangeCard({
                        ...changeCard,
                        status: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="in-work">В работе</label>

                  <input
                    type="radio"
                    name="radios"
                    id="testing"
                    value="Тестирование"
                    checked={changeCard.status === "Тестирование"}
                    onChange={(e) =>
                      setChangeCard({
                        ...changeCard,
                        status: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="testing">Тестирование</label>

                  <input
                    type="radio"
                    name="radios"
                    id="ready"
                    value="Готово"
                    checked={changeCard.status === "Готово"}
                    onChange={(e) =>
                      setChangeCard({
                        ...changeCard,
                        status: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="ready">Готово</label>
                </div>
              </div>
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme ">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme ">
                  <p>В работе</p>
                </div>
                <div className="status__theme ">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme ">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar selected={selected} setSelected={setSelected} />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <div className="pop-browse__btn-edit">
              <div className="btn-group">
                <button
                  onClick={change}
                  className="btn-edit__edit _btn-bg _hover01"
                >
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to={AppRoutes.MAIN}>Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
