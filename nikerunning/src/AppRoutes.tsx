import { BrowserRouter, Route, Routes} from "react-router-dom";
import './assets/css/style.css';
import Home from "./pages/home";
import Running from "./pages/running";
import 'bootstrap/dist/css/bootstrap.css';


function AppRoutes() {

  return ( 
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/running" element={<Running></Running>}></Route>
      </Routes>
  </BrowserRouter>

  );
}

export default AppRoutes
