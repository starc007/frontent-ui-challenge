import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "@/components/appComp/Navbar";
import { Home } from "@/Pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Home />
    </BrowserRouter>
  );
};

export default App;
