import React from "react";
import ReactDOM from "react-dom";
import Renderizado from "../index.js";
import Seconds from "./secondscounter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = (props) => {

	return (
		<div className="text-center">
			<div className="reloj">
				<Seconds numbers={<i className="far fa-clock"></i>} />
				<Seconds numbers={props.aux[0]} />
				<Seconds numbers={props.aux[1]} />
				<Seconds numbers=":" iden="fifthnumber"/>
				<Seconds numbers={props.aux[2]} />
				<Seconds numbers={props.aux[3]} />
				<Seconds numbers=":" iden="fifthnumber"/>
				<Seconds numbers={props.aux[4]} />
				<Seconds numbers={props.aux[5]} />
			</div>
			
		</div>
	);
};


export default Home;
