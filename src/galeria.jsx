import React from "react";
import './galeria.css';
function Galeria(props){
   return(
    <div id="Obraz">
    <img src={props.obraz}/>
        <h1>{props.numer}</h1>
    <h1>{props.tytul}</h1>
    <p>{props.opis}</p>
        <p>Cena : {props.cena}</p>
    </div>
        );
}
export default Galeria;