import './App.scss';
import { NavBar } from './components';
import { HeroPage } from './pages/HeroPage';

function App() {
  return (
    <div className="container">
       <NavBar/>
       <HeroPage/>
    </div>
  );
}

export default App;
