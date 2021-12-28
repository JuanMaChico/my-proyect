import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Inicio = () => {

	const { nombre } = useParams();

	return (
		<div>
			<h1>Componente Inicio</h1>
			<p>{nombre}</p>
		</div>
	);
};

export default Inicio;
