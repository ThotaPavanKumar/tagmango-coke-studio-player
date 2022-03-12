import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { Myrouter } from './components/MyRouter/Myrouter';

function App() {
  return (
    <div >
      <Myrouter />
      {/* <Main /> */}
    </div>
  );
}

export default App;
