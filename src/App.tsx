import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { ChooseThemeProvider } from "./contexts/ChooseThemeContext";
import { TextTransformProvider } from "./contexts/TextTransformContext";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <ChooseThemeProvider>
      <TextTransformProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </TextTransformProvider>
    </ChooseThemeProvider>
  );
}
