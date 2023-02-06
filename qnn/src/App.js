import { Menu } from "./components/menu";
import { FormPage } from "./page/form";
import { Home } from "./page/home";
import { Profile } from "./page/profiles";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/form" element={<FormPage />}/>
          <Route path="/*" element={<Home />}/>
      </Routes> 

  );
}

export default App;
