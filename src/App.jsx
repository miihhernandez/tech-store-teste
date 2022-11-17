import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import CookieMessage from './components/global/CookieMessage';
import { GlobalCarrinho } from './context/GlobalContext';
import Carrinho from './components/Carrinho/Carrinho';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Usuario from './pages/Usuario';
import { AuthProvider } from "./context/auth";

function Private ({ Item }) {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
}

function App() {
  return (
    <GlobalCarrinho>
      <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Produtos />} />
              <Route path="/usuario" element={<Usuario />} />
              <Route path="produto/:id" element={<Produto />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
          <CookieMessage />
          <Carrinho />
          <Footer />
        </BrowserRouter>
        </AuthProvider>
      </div>
    </GlobalCarrinho>
  );
}

export default App;
