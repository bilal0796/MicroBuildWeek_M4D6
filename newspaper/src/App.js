import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import IntroJumbo from './Components/IntroJumbo';
import Categories from './Components/Categories';
import FeaturedPost from './Components/FeaturedPost';
import newsData from './Data/News.json'
function App() {
  return (
    <>
      <MyNavbar />
      <hr />
      <Categories />
      <hr />
      <IntroJumbo />
      <FeaturedPost news={newsData} />
      </>
  );
}

export default App;
