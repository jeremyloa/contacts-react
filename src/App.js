import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Front from "./pages/Front";


function App() {
  return (
    <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<Front/>}></Route>
            <Route exact path="/app/*" element={<Main/>}></Route>
          </Routes>

    </BrowserRouter>
  );
}

export default App;
