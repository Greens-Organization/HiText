import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { ChooseThemeProvider } from "./contexts/ChooseThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <ChooseThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ChooseThemeProvider>
  );
}
