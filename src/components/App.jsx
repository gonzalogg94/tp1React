import Holamundo from "./Holamundo";
import Msj from "./Msj";
import './style.css';

function App() {
  const friend="my friend";


  return (
    <section>
      <Holamundo myfriend={friend}/>
      <Msj></Msj>
    </section>
    
  )
}

export default App;
