import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const NotFoundText = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const NotFoundImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;

export const HomeLink = styled.a`
  text-decoration: none;
  color: #007bff;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
