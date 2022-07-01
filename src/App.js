import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <div>

    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
    </Routes>

    </div>
   
  );
}

export default App;
