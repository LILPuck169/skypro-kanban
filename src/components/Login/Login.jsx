import { useState } from "react";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";
import { Link } from "react-router-dom";
import { loginKanban } from "../../Api";
import useUser from "../../hooks/useUser";
import {
  ContainerSigIn,
  Modal,
  ModalBlock,
  ModalButton,
  ModalFormGroup,
  ModalFormLogin,
  ModalInputLogin,
  ModalInputPassword,
  ModalTtl,
  Wrapper,
} from "./Login.styled";

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
    <Wrapper>
      <ContainerSigIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInputLogin
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={loginData.login}
                onChange={onLoginChange}
              />
              <ModalInputPassword
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <ModalButton
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setAuth(loginData);
                }}
              >
                Войти
              </ModalButton>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.REGISTRATION}>Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSigIn>
    </Wrapper>
  );
}
