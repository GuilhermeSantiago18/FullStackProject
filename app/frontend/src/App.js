import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import theme from "./themes/theme";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Home />
      </ThemeProvider>
    </div>
  );
}
