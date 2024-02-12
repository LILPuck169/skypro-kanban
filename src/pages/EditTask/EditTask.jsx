import { Link, useParams } from "react-router-dom";

import useTasks from "../../hooks/useTasks.jsx";
import Calendar from "../../components/Calendar/Calendar.jsx";
import { AppRoutes } from "../RouteObjects/RouteObjects.js";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  console.log(tasks);
  const currentTask = tasks?.find((item) => item._id === id);
  console.log(currentTask);

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
                    value="Web Design"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">Без статуса</label>

                  <input
                    type="radio"
                    value="Research"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">Нужно сделать</label>

                  <input
                    type="radio"
                    value="Copywriting"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">В работе</label>
                  <input
                    type="radio"
                    value="Research"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">Тестирование</label>
                  <input
                    type="radio"
                    value="Research"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">Готово</label>
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
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <div className="pop-browse__btn-edit">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
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
