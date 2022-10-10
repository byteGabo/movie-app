import { NavBar } from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandigPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} /> 
          <Route path="/" element={<LandigPage />} />
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
      </main>
    </Router>
  );
}
