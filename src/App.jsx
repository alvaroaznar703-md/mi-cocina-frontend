import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RecetasPage } from "./pages/RecetasPage";
import { DetallePage } from "./pages/DetallePage";
import { ContactoPage } from "./pages/ContactoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recetas" element={<RecetasPage />} />
        <Route path="/recetas/:id" element={<DetallePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
