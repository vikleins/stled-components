import logo from './logo.svg'
import './App.css'
import './styles.css'
import StyledButton, {FancyButton, SubmitButton} from './components/Button/Button';



function App() {
  return (
    <div className="App">
      <img src={logo} className='App-logo' alt='logo'></img>
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
    </div>
  );
}

export default App;
