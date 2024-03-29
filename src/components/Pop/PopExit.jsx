import { AppRoutes } from "../../pages/RouteObjects/RouteObjects";
import { Link } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitExit,
  PopExitExitNo,
  PopExitExitNoA,
  PopExitExitYes,
  PopExitExitYesA,
  PopExitFormGroup,
  PopExitTtl,
} from "./PopExit.styled";
import useUser from "../../hooks/useUser";

export default function PopExit() {
  const { logout } = useUser();
  return (
    <PopExitExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          {/* Не понял как сделать! */}
          <div>
            <PopExitTtl>Выйти из аккаунта?</PopExitTtl>
          </div>
          <form id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes
                id="exitYes"
                onClick={(event) => {
                  event.preventDefault();
                  logout();
                }}
              >
                Да, выйди от сюда
              </PopExitExitYes>
              <PopExitExitNo id="exitNo">
                <PopExitExitNoA>
                  <Link to={AppRoutes.MAIN}>Нет, остаться</Link>
                </PopExitExitNoA>
              </PopExitExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitExit>
  );
}
