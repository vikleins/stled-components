import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props)=> props.variant === 'outline' ? '#FFF' : "#4CAF50"};
  color: ${(props) => props.variant === 'outline' ? '#4CAF50' : "white"};
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0ms.5s all ease-out;
`

