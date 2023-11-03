
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./components/NavbarComponent/NavbarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {

  return <div>
    <NavBarComponent/>
    <ItemListContainer greeting="Bienvenidos"/>
  </div>
  }

export default App;
