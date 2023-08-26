import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/main/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <div className='App'>
      <div className='App-inner'>
      <Sidebar/>
       <Home/>
       <Footer/>
      </div>
      </div>
    </>
  );
}

export default App;
