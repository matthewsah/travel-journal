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
        {/* <TravelCard 
          picture = "sand-dunes.JPEG"
          location = "Great Sand Dunes, CO"
          googleMapsLink = "https://www.google.com/maps/place/Colorado/@38.9807326,-107.7935267,7z/data=!3m1!4b1!4m5!3m4!1s0x874014749b1856b7:0xc75483314990a7ff!8m2!3d39.5500507!4d-105.7820674"
          attraction = "The Great Sand Dunes National Park"
          date = "July 2, 2022"
          description = {"Day trip to the Great Sand Dunes National Park. The Great Sand Dunes\
           have the largest sand dunes in North America, with the legendary Star Dune towering\
            at 755 feet. Sand surface temperatures can reach peaks of 150°F in the Summer, and\
             dip to -20°F in the Winter."}
        />

        <TravelCard 
          picture = "sand-dunes.JPEG"
          location = "Colorado, U.S"
          googleMapsLink = "https://www.google.com/maps/place/Colorado/@38.9807326,-107.7935267,7z/data=!3m1!4b1!4m5!3m4!1s0x874014749b1856b7:0xc75483314990a7ff!8m2!3d39.5500507!4d-105.7820674"
          attraction = "The Great Sand Dunes National Park"
          date = "July 2, 2022"
          description = "Day trip to the Great Sand Dunes National Park. The Great Sand Dunes have the largest sand dunes in North America, with the legendary Star Dune towering at 755 feet."
        /> */}
      </div>
    </div>
  );
}

export default App;
