import React from "react";
import Bienvenida from "./components/Bienvenida";
import Card from "./components/Card";

function App() {
    return (
        <div>
            <h1>Propiedades de los Componentes</h1>
            <Bienvenida nombre="Juan Manuel" />
            <Bienvenida nombre="Carlos" />
            <Bienvenida nombre="Sasha" />
            <Bienvenida nombre="Gato" />
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Card
                    imagen="https://loremflickr.com/120/120"
                    titulo="Juan Manuel"
                    texto="lo que sea"
                />
                <Card
                    imagen="https://loremflickr.com/120/120"
                    titulo="Juan Manuel"
                    texto="lo que sea"
                />
                <Card
                    imagen="https://loremflickr.com/120/120"
                    titulo="Juan Manuel"
                    texto="lo que sea"
                />
            </div>
        </div>
    );
}

export default App;
