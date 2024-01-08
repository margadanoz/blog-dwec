import './App.css';
import Navbar from './Navbar';
import Inicio from './Inicio';

function App() {
  
  return (
    <div className="App">
      {/* !er componente */}
      <Navbar />
      <div className="content">
        {/* Llaves para incluir la variable de js por jsx */}
        {/* Segundo componente */}
        <Inicio />        
      </div>
    </div>
  );
}

export default App;
