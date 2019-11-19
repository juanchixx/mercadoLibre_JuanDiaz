import React , {useState} from 'react';
import './App.sass';
import {NavBar} from './components/NavBar';
import {Switch, Route, useHistory} from 'react-router-dom';
import Busqueda from './components/Busqueda';
import Item from './components/Item';

function App() {
  let history = useHistory();
  const [busqueda, setBusqueda] = useState([]);
  const getBusqueda = async (query) => {
        const dataBusqueda = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
        const resultado = await dataBusqueda.json();
          setBusqueda(resultado.results);
          history.push(`/items?search=${query}`);
  };


  return (
      <div className="App">
        <NavBar onSubmit={(query) => getBusqueda(query)}/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact path="/items">
              <Busqueda items={busqueda}/>
            </Route>
            <Route path="/items/:id" component={Item}/>
        </Switch>
      </div>
  );
}

const Home = () => (
  <div>

  </div>
)
export default App;
