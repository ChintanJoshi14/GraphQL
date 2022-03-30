import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Movies/>
      <Footer></Footer>
    </div>
  );
}

export default App;
