import { useState } from "react";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";
import { Link } from "react-router-dom";
import {
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalButton,
  ModalFormGroup,
  ModalFormLogin,
  ModalInputLogin,
  ModalInputName,
  ModalInputPassword,
  ModalTitle,
  Wrapper,
} from "./Registration.styled";

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
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInputName
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={registrationData.name}
                onChange={onNameChange}
              />
              <ModalInputLogin
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={registrationData.login}
                onChange={onLoginChange}
              />
              <ModalInputPassword
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={registrationData.password}
                onChange={onPasswordChange}
              />
              <ModalButton
                id="SignUpEnter"
                onClick={(event) => {
                  event.preventDefault();
                  register(registrationData);
                }}
              >
                Зарегистрироваться
              </ModalButton>
              <ModalFormGroup>
                <p>
                  Есть аккаунт? <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
}
