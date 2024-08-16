
import styled, { keyframes } from 'styled-components'

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
  transition: 0.3s all ease-out;
  &:hover{
    background-color: ${(props)=> props.variant !== 'outline' ? '#FFF' : "#4CAF50"};
  color: ${(props) => props.variant !== 'outline' ? '#4CAF50' : "white"};
  }
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`

export const SubmitButton = styled(StyledButton).attrs((props)=>({
    type: 'submit'
}))`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props)=>
        props.variant !== 'outline' ? '#FFF' : '#4CAF50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px)
    }
`

const rotate = keyframes`
from{
    transform: rotate(0deg);
}

to{
    transform: rotate(360deg);
}
`

export const AnimetedLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 2s linear;

`

export const DarkButton = styled(StyledButton)`
    border: 2px solid ${(props) => props.theme.dark.primary};
    background-color:  ${(props)=> props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text}
`
