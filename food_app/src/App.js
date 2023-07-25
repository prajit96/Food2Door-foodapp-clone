import './App.css';
import LargeWithAppLinksAndSocial from './Components/LargeWithAppLinksAndSocial';
import NavBar from './Components/NavBar';
import Allroutes from './Pages/Allroutes';
import HomePage from './Pages/HomePage.jsx'

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Allroutes/>
      <LargeWithAppLinksAndSocial/>
    </div>
  );
}

export default App;
