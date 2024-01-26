import { useState } from "react";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";
import { Link } from "react-router-dom";

export default function Registration({ register }) {
  const [registrationData, setRegistrationData] = useState({
    login: "",
    name: "",
    password: "",
  });

  function onLoginChange(event) {
    setRegistrationData({
      ...registrationData,
      login: event.target.value,
    });
  }

  function onNameChange(event) {
    setRegistrationData({
      ...registrationData,
      name: event.target.value,
    });
  }

  function onPasswordChange(event) {
    setRegistrationData({
      ...registrationData,
      password: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={registrationData.name}
                onChange={onNameChange}
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={registrationData.login}
                onChange={onLoginChange}
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={registrationData.password}
                onChange={onPasswordChange}
              />
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
                onClick={(event) => {
                  event.preventDefault();
                  register(registrationData);
                }}
              >
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>
                  Есть аккаунт? <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
