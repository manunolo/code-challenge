import Login from './apartados/login';
import Register from './apartados/registro';
import List from './apartados/index';


import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<List />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/registro" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
