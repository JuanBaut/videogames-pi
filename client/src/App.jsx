import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import Landing from "./components/Landing/Landing";
import Shelf from "./components/Shelf/Shelf";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Shelf />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
