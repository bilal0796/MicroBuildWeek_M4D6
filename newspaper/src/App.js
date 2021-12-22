import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import IntroJumbo from './Components/IntroJumbo';
import Categories from './Components/Categories';
function App() {
  return (
    <>
      <MyNavbar />
      <hr />
      <Categories />
      <hr />
      <IntroJumbo />
      </>
  );
}

export default App;
