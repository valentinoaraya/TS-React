import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer text={"Bienvenido a"} resalt={"Thikia Sport"} subtext={"Los mejores suplementos deportivos"}/>
    </div>
  );
}

export default App;
