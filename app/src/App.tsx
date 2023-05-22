import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";
import Delete from "./components/pages/Delete/Delete";
import Get from "./components/pages/Get/Get";
import Main from "./components/pages/Main/Main";
import Post from "./components/pages/Post/Post";
import AppContext from "./context/AppContext";

function App(): JSX.Element {
  const [reqData, setReqData] = useState([]);

  return (
    <AppContext.Provider value={{ reqData, setReqData }}>
      <Navbar />
      <Footer />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:get" element={<Get />} />
        <Route path="/:post" element={<Post />} />
        <Route path="/:delete" element={<Delete />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
