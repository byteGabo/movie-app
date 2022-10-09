import { NavBar } from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
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
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandigPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
