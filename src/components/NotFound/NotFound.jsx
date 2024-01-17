import React from "react";
import {
  HomeLink,
  NotFoundContainer,
  NotFoundImage,
  NotFoundText,
} from "./NotFound.styled";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>404 - Страница не найдена</NotFoundText>
      <NotFoundImage src="/path_to_error_image.png" alt="Ошибка 404" />
      <HomeLink to="/">На главную</HomeLink>
    </NotFoundContainer>
  );
};
