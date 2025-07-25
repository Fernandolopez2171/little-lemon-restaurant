import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/homepage/Home';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
