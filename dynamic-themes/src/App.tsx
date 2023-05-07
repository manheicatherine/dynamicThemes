import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from "./components/Nav";
import { Page } from "./components/Page";

const App = () => {
  return (
    <div className="App">
 
      <Routes>
      <Route path="/*" element={<Page colour="GreyOrange" />} />
        <Route path="/greyorangetheme" element={<Page colour="GreyOrange" />} />
        <Route path="/tealtheme" element={<Page colour="Teal" />} />
        <Route path="/yellowtheme" element={<Page colour="Yellow" />} />
        <Route path="/redtheme" element={<Page colour="Red" />} />
        <Route path="/purpletheme" element={<Page colour="Purple" />} />
      </Routes>
    </div>
  );
};

export default App;
