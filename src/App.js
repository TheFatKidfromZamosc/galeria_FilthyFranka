import logo from './logo.svg';
import './App.css';
import Galeria from './galeria.jsx';
import chin_chin from './ChinChin.webp';
import Yadaran from './Yadaran.webp';
import FilthyFrank from './FilthyFrank.webp';
import PinkGuy from './Ey_b0ss.webp';
import SpeedLord from './TheSpeedLord-0.webp';
import Prometheus from './Prometheus.webp';
import Politikz from './Politics_witha_z.webp';
import SalamanderMan from './Salamander_Man2.webp';
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td><Galeria obraz = {chin_chin} numer="1" tytul="Chin-Chin" opis = "Nie polecam tego googlowac i co to znaczy po japońsku" cena= "200000000000000000 rubli rumuńskich"></Galeria>  </td>
          <td><Galeria obraz = {Yadaran} numer="2" tytul="Yadaran" opis = "He is able to drain all of pink guys chrmosomes effortlessly" cena= "49 Lampartów" >  </Galeria> </td>
          <td><Galeria obraz = {FilthyFrank} numer="3" tytul="Filthy Frank" opis = "The creator of shitpost and our universe as we know it" cena = " 18 rodów habsburgów" ></Galeria> </td>
          <td><Galeria obraz = {PinkGuy} numer="4" tytul="Pink Guy" opis = "He has erectile dysfunction" cena = "1 yen "></Galeria> </td>
        </tr>
        <tr>
          <td><Galeria obraz = {SpeedLord} numer="5" tytul="Speed Lord" opis = "The green copy of sonic" cena = "Tyle ile mozesz dac" ></Galeria> </td>
          <td><Galeria obraz = {Prometheus} numer="6" tytul="Prometheus" opis = "He has a bent knee" cena = "Fabrykan prl'u "></Galeria> </td>
          <td><Galeria obraz = {Politikz} numer="7" tytul="Politikz" opis = "The government is corrupt open your third eye" cena = "Ogromne zbiorowisko łosi i saren w Płocku "></Galeria> </td>
          <td><Galeria obraz = {SalamanderMan} numer="8" tytul="Salamander Man" opis = "HE CAN PLAY TITANIC ON A FLUE WITH HIS NOSE LAD" cena = "Pyk Pyk konfi " ></Galeria> </td>
        </tr>

      </table>

    </div>
  );
}

export default App;
