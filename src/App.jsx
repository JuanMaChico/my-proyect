import './App.css';
import { Contador } from './components/Contador';
import  Listado  from './components/Listado';
import Temperatura from './components/Temperatura';
import Formulario from './components/Formulario';

function App() {

  return (

    <div className="App mt-5">

      <h1>App in React</h1>

      <h2>Probando Componentes</h2>

      {/* Contador usando SetState */}
      <Contador/>

      {/* Listado de elementos */}
      <Listado/>

      {/* Utilizacion de setState */}
      <Temperatura/>

      {/* Componente de Inputs */}
      <Formulario/>
    </div>

);
}

export default App;
