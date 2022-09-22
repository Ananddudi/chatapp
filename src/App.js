import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { Error } from "./components/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
