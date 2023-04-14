import { AddUser } from "./components/AddUser";
import { Home } from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalProvider } from "./context/GlobalState";
import axios from "axios";
import { useEffect } from "react";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Home />
        <ToastContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
