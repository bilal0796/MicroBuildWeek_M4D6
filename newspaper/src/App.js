import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import IntroJumbo from './Components/IntroJumbo';

function App() {
  return (
    <div className='Container'>
      <MyNavbar />
      <hr />
      <IntroJumbo /> 
    </div>
  );
}

export default App;
