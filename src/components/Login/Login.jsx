import { useState } from "react";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";
import { Link } from "react-router-dom";
import { loginKanban } from "../../Api";
import useUser from "../../hooks/useUser";

export default function Login() {
  const { login } = useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  function setAuth(loginData) {
    loginKanban(loginData)
      .then((data) => {
        login(data.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function onLoginChange(event) {
    setLoginData({
      ...loginData,
      login: event.target.value,
    });
  }

  function onPasswordChange(event) {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={loginData.login}
                onChange={onLoginChange}
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setAuth(loginData);
                }}
              >
                {/* <Link to={AppRoutes.MAIN}>Войти</Link> */}
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.REGISTRATION}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
