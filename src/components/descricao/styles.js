import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-top: 3%;
  width: 78%;
  height: 70vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ContainerImage = styled.img`
  background-image: ${(props) => `url('${props.src}')`};
  display: flex;
  width: 4vmax;
  height: 10vh;
  border: 1px solid gray;
  margin-left: 10%;
  margin-top: 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ContainerImageTop = styled.img`
  margin-top: -39%;
  margin-left: 25%;
  position: initial;
  width: 20%;

  @media (max-width: 768px) {
    margin-top: -65%;
    margin-left: 35%;
    position: initial;
    width: 100%;
  }
`
export const ConatinerDesc = styled.div`
  position: inherit;
  padding: 15px;
  width: 40%;
  margin-left: 55%;
  margin-top: -39%;

  & h5 {
    width: 100%;
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 20px;
      width: 100%;
    }
  }

  & div {
    width: 80%;
  }

  @media (max-width: 768px) {
    margin-top: 10%;
    margin-left: 5%;
    position: initial;
    width: 100%;
  }
`

export const Button = styled.button`
  background-color: ${(prop) => prop.backgroundColor};
  width: 35%;
  height: 10%;
  border-radius: 6px;
  border: solid 1px;
  border-color: rgba(128, 128, 128, 0.305);
  text-align: center;
  font-size: 50%;
  display: inline-block;


  &:active {
    background-color: rgba(80, 194, 39, 0.59);
    cursor: pointer;
  }
`

export const ContainerDiv = styled.div`
  & ContainerDiv:hover{
  background-color: orange;
}
`

export const Button2 = styled.button`
  background-color: ${(prop) => prop.backgroundColor};
  width: 48%;
  padding: 5px;
  margin: 1px;
  height: 10%;
  border-radius: 6px;
  border: solid 1px;
  border-color: rgba(128, 128, 128, 0.305);
  text-align: center;
  font-size: 15px;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }

  &:active {
    background-color: gray;
    cursor: pointer;
  }
`

