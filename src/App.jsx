import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
      {/*User Layout*/}
      </Route>
      <Route>{/*Admin Layout*/}</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
