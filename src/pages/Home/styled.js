import styled from "styled-components";
import Clima from "../../assets/img/clima.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: #2229;
  margin: 0 20% 0 24%;
  padding: 30px;
  color: #fff;
  border: none;
  border-radius: 3px;
  h1,
  p,
  input {
    margin: 10px;
  }

  p {
    margin: 15px;
    font-weight: 600;
  }
  h3 {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
    width: 80%;
    margin: 0;
    margin-inline: auto;

    h3 {
      font-size: 20px;
    }
  }
`;

export const Btn = styled.button`
  margin: 10px;
  background-color: #013d44;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;

  :hover {
    cursor: pointer;
    background-color: #5969f7b8;
  }
`;

export const Main = styled.main`
  background-image: url(${Clima});
  background-repeat: no-repeat;
  width: 100%;
  height: 85vh;
  padding-top: 15%;
  align-items: center;
  background-size: cover;

  input {
    padding: 5px;

    :focus {
      box-shadow: 0;
      outline: 0;
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
  }
`;
