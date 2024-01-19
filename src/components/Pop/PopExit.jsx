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

export default function PopExit() {
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
              <PopExitExitYes id="exitYes">
                <Link to={AppRoutes.LOGIN}>
                  Да, выйди от сюда
                  {/* <PopExitExitYesA href="modal/signin.html">
                    Да, выйти
                  </PopExitExitYesA>{" "} */}
                </Link>
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
