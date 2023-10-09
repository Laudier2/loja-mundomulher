import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-weight: bold;
    text-shadow: 0 3px 0 rgb(121, 116, 116),
        0 1px 0 #c9c9c9,
        0 1px 0 #bbb,
        0 1px 0 #b9b9b9,
        0 1px 0 #aaa,
        0 6px 1px rgba(0, 0, 0, .1),
        0 0 1px rgba(0, 0, 0, .1),
        0 1px 3px rgba(0, 0, 0, .3),
        0 3px 5px rgba(0, 0, 0, .2),
        0 5px 10px rgba(0, 0, 0, .25),
        0 10px 10px rgba(0, 0, 0, .2),
        0 20px 20px rgba(0, 0, 0, .15);
  & a {
    color: white;
    text-decoration: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
    b {
      position: absolute;
      margin-left: 14px;
      margin-top: 7px;
      font-size: 11px;
    }
  }
`;
