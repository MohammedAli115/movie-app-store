import './App.css';
import './all.min.css'
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Slider from './Components/Slider';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Search />
      <div>
      </div>
    </div>
  );
}

export default App;
