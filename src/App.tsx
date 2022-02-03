import { ChooseThemeProvider } from "./contexts/ChooseThemeContext";
import { TextTransformProvider } from "./contexts/TextTransformContext";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <TextTransformProvider>
      <ChooseThemeProvider>
        <Home />
      </ChooseThemeProvider>
    </TextTransformProvider>
  );
}
