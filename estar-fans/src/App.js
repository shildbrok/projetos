import './App.css';

import Home from './pages/Home'
import About from './pages/About'

import {BrowserRouter, Router, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <title>Estar Fans</title>
      <h1>Olá Robert, Sid, e Irmãos Jujudson's</h1>
      <h2 className="subtitle">aqui é o teste</h2>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<About/>}/>
        </Router>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
