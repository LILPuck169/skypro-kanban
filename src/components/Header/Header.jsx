import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  HeaderBlock,
  HeaderNav,
  HeaderStyle,
} from "./Header.styled";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";

export default function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggkeDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <HeaderStyle>
      <Container>
        <HeaderBlock>
          {/* Не понял кого нужно заменять, в CSS Там написанно header__logo img */}
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

          <HeaderNav>
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
                  {/* <NavLink
                    to={AppRoutes.POPEXIT}
                    style={({ isActive }) => ({
                      display: isActive ? "block" : "none",
                    })}
                  >
                    Выйти!
                  </NavLink> */}
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
            {/* Моя карточка */}

            {/* Конец моей карточки */}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderStyle>
  );
}
