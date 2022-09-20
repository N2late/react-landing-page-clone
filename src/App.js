import DarkMode from './components/DarkMode';
import ExpirationDate from './components/ExpirationDate';
import FoodWaste from './components/FoodWaste';
import Footer from './components/Footer';
import FreshFood from './components/FreshFood';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Slogan from './components/Slogan';
import StoredTime from './components/StoredTime';
import TimeAlerts from './components/TimeAlerts';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <FoodWaste />
      <ExpirationDate />
      <FreshFood />
      <StoredTime />
      <TimeAlerts />
      <DarkMode />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
