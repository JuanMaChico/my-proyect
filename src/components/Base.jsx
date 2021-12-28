import React, { useEffect, useState } from "react";

const Base = () => {

	const [nombre, setNombre] = useState('Pedro');

	useEffect(() => {

		setTimeout(() => {
			setNombre('Juan');
		},2000)


	})

	return (
		<div>
			<h1>Componente Base</h1>
			<p>{nombre}</p>
		</div>
	);
};

export default Base;
