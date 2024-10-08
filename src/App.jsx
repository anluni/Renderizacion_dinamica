import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Cart from './components/Cart';
// import Home from './components/Home';

// Componentes LOGIN y REGISTRO
// import FormRegistro from './components/FormRegistro';
// import FormLogin from './components/FormLogin';

function App() {
  return (
    //App.jsx se mostrarán los componentes Navbar, Home y Footer
    <>
        <NavBar></NavBar>
        {/* <Home></Home> */}
        {/* <FormRegistro/> */}
        {/* <FormLogin/> */}
        <Cart/>
        <Footer></Footer>
    </>
  )
}
export default App;