import styled from "styled-components";

export const Button = styled.button`
  display: ${(props) => (props.teste ? "relative" : "none")};
  top: 0;
  right: 0;
  background: none;
  color: #000;
  font-size: 32px;
  margin-top: 10px;
  margin-left: 10px;
  border: none;

  @media (max-width: 600px) {
    display: ${(props) => (props.teste ? "unset" : "none")} !important;
    position: absolute !important;
  }
`;

export const Close = styled.button`
  display: none;
  top: 0;
  right: 0;
  background: none;
  color: #000;
  font-size: 32px;
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  color: #fff;

  @media (max-width: 600px) {
    display: unset !important;
    position: absolute !important;
  }
`;

export const SideNav = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #208eeb;
  overflow-x: hidden;
  padding-top: 30px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100px;
    align-items: center;

    p {
      display: none;
    }

    div {
      width: 100%;
    }

    a {
      width: 100%;
      justify-content: center;
      span {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.teste ? "relative" : "none")};
  }

  strong {
    display: flex;
    margin: 20px 0px 40px 0px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #fff;
    span {
      margin-right: 10px;
      font-size: 25px;
      color: #fbc46a;
    }

    a {
      display: flex;
      background: #000;
    }
  }

  div {
    margin-bottom: 30px;
    small {
      margin: 0px 0px 50px 20px;
      font-size: 15px;
      color: #a6d2f7;
      text-transform: uppercase;
    }
  }

  a {
    margin: 10px 0px 0px 0px;
    padding: 15px 0px 15px 20px;
    text-decoration: none;
    font-size: 15px;
    color: #a6d2f7;
    display: flex;

    &:hover {
      color: #f1f1f1;
    }

    span {
      margin-right: 25px;
    }
  }

  a.active {
    background-image: linear-gradient(to right, #39a2fb, #0083f2);
    box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    color: #fff;

    span {
      color: #fbc46a;
    }
  }
`;
export const Background = styled.div`
  position: fixed;
  display: ${(props) => (props.teste ? "block" : "none")};
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
