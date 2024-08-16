import { ThemeProvider } from 'styled-components';
import logo from './logo.svg'
import './App.css'
import './styles.css'
import StyledButton, {FancyButton, SubmitButton} from './components/Button/Button';
import {AnimetedLogo, DarkButton} from './components/Button/Button.styles'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: "#fff",
    text: "#000"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <img src={logo} className='App-logo' alt='logo'></img>
       */}
       <AnimetedLogo src={logo} />
      <StyledButton type='submit'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <FancyButton as='a'>Fancy Button</FancyButton>
      <div>
        <br/>
      </div>
      <SubmitButton>Fancy Button</SubmitButton>
      <div>
        <br/>
      </div>
      <DarkButton >Dark Theme</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
