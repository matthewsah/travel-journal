import './App.css';
import Navbar from './components/Navbar.tsx'
import TravelCard from './templates/travel-card.tsx'
import {data} from './data.ts'

const cards = data.map(info => <TravelCard {...info} />);

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="travel-cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
