import './App.scss';
import { NavBar } from './components';
import { CarSection } from './pages/CarSection';
import { Coursel } from './pages/Coursel';
import { HeroPage } from './pages/HeroPage';

function App() {
  return (
    <div className="container">
       <NavBar/>
       <HeroPage/>
       <CarSection/>
       <Coursel/>
    </div>
  );
}

export default App;
