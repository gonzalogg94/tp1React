import { useState } from "react";

const Msj = () => {
let texto="Hellow word";
const [saludar, setSaludar]=useState("hellow word")

const Agregar=()=>{
    setSaludar(saludar+"(From change state!!)")
}

    return (
        <div>
            <h2>Puedes agregar un msj al texto</h2>
            <h3>{saludar}</h3>
            <button onClick={Agregar}>Agregar Msj</button>
        </div>
    );
};

export default Msj;