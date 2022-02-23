import styled from "styled-components";

export const Container = styled.div`
  background: ${({bar}) => bar? "green" : "white"};
  color: ${({bar}) => bar? "white" : "black"};
  padding: ${({bar}) => bar? "1.5em" : "0"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ListContainer = styled.div`
  width: 100%;
  background-color: #CCDDFF;
  border: 1px solid blue;
  border-radius: 5px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0.5em 0;
`

export const Buttons = styled.button`
  width: 2em;
  height: 2em;

  &:hover{
    cursor: pointer;
  }
`
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MainContent = styled.div`
  width: 30%;
  margin: 2em auto;
  padding: 1em;
  border: 2px solid black;
  border-radius: 5px;
`