import React from 'react';
import Bienvenida from './components/Bienvenida';
import Card from './components/Card';

function App() {

  return (

    <div>
      <h1>Propiedades de los Componentes</h1>
      <Bienvenida nombre ="Juan Manuel"/>
      <Bienvenida nombre ="Carlos"/>
      <Bienvenida nombre ="Sasha"/>
      <Bienvenida nombre ="Gato"/>
      <br />
      <div style={{ display: "flex"}}>
        <Card
          imagen="https://loremflickr.com/1920/1080"
          titulo ="Juan Manuel"
          texto="lo que sea"
          />
        <Card
          imagen="https://loremflickr.com/1080/1920"
          titulo ="Juan Manuel"
          texto="lo que sea"
          />
      </div>
    </div>

);}

export default App;
