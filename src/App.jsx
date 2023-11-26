import { Route, Routes, useLocation } from "react-router-dom";
import { MyNavBar } from "./components/MyNavBar";
import { useEffect, useState } from "react";
import HomeMovies from "./pages/HomeMovies";
import SinglePage from "./pages/SinglePage";

function App() {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes("SinglePage")) setShow(false);
    else setShow(true);
  });
  return (
    <>
      <MyNavBar show={show} />
      <Routes>
        <Route path="/" element={<HomeMovies />} />
        <Route path="/SinglePage/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
