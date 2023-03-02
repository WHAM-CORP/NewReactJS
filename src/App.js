import {BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Inicio from './routes/Inicio/Inicio'
import InicioId from './routes/InicioId/InicioId';
import './App.css';
import CartWidgetProd from './routes/CartWidgetProd/CartWidgetProd';
function App() {
  return (
    <BrowserRouter className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/:id" element={<InicioId />} />
        <Route exact path="/CartWidget" element={<CartWidgetProd />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
