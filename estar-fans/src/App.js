import './App.css';

import Home from './pages/Home'
import About from './pages/About'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <title>Estar Fans</title>
      <h1>Olá Robert, Sid, e Irmãos Jujudson's</h1>
      <h2 className="subtitle">aqui é o teste</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
