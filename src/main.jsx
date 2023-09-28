import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { DataShereprovider } from "./ConText/DataShereprovider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataShereprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataShereprovider>
);
