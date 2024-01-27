import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HeaderBlock,
  HeaderNav,
  HeaderStyle,
} from "./Header.styled";
import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggkeDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <HeaderStyle>
      <Container>
        <HeaderBlock>
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

          <Link to={AppRoutes.ADD_CARD}>
            <HeaderNav>
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a>Создать новую задачу</a>
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
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button type="button" className="_hover03">
                    <Link to={AppRoutes.POPEXIT}>Выйти</Link>
                  </button>
                </div>
              )}
            </HeaderNav>
          </Link>
        </HeaderBlock>
      </Container>
    </HeaderStyle>
  );
}
