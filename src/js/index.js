//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let segundero=0;
let minutero=0;
let hora=0;
let aux='';

const contador=()=>{
	segundero += 1;
    if (segundero>59){
        minutero +=1;
        segundero= 0;
    }
    if (minutero>59){
        minutero = 0;
        hora += 1;
    }

    aux=`${hora.toString().padStart(2, '0')}${minutero.toString().padStart(2, '0')}${segundero.toString().padStart(2, '0')}`;
	
    ReactDOM.render(<Home aux={aux} />, document.querySelector("#app"));
}

setInterval(contador, 1000);



