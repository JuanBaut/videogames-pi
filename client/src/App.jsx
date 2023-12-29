import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/detail/:code'
          element={<Detail />}
        />
        <Route
          path='/activity'
          element={<Create />}
        />
        <Route />
      </Routes>
    </>
  );
}

export default App;
