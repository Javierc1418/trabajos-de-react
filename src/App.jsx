
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./components/NavbarComponent/NavbarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./index.css";  
function App() {

  const [products, setproductos]= useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then((res) =>{ 
      console.log(res);
    } )
    .catch((error) => console.log(error)
    );
  }, []);

  return <div>
    <NavBarComponent/>
    <ItemListContainer />
  </div>
  }

export default App;
