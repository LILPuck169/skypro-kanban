import { useState } from "react";
import { Container, HeaderStyle } from "./Header.styled";
import { GlobalStyle } from "../GlobalStyle.js";

export default function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggkeDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <HeaderStyle>
      <Container>
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            {/* Кнопка по нажатию */}
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a onClick={addCard} href="#">
                Создать новую задачу
              </a>
            </button>
            <a
              onClick={toggkeDropdown}
              href="#user-set-target"
              className="header__user _hover02"
            >
              YarOlshankiy
            </a>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <a href="">#</a>
                <p className="pop-user-set__name">Yaroslav Olshanskiy</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
            {/* Моя карточка */}

            {/* Конец моей карточки */}
          </nav>
        </div>
      </Container>
    </HeaderStyle>
  );
}
