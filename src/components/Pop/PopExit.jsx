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
                <PopExitExitYesA href="modal/signin.html">
                  Да, выйти
                </PopExitExitYesA>{" "}
              </PopExitExitYes>
              <PopExitExitNo id="exitNo">
                <PopExitExitNoA href="main.html">Нет, остаться</PopExitExitNoA>{" "}
              </PopExitExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitExit>
  );
}
