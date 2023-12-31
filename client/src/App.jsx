import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import Landing from "./components/Landing/Landing";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "./redux/actions/getVideogames";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
