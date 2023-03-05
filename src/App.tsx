import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import MainPage from "./components/pages/MainPage";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      text: {
        primary: "#1D4062",
        secondary: "#F0AF2D",
      },
      primary: {
        main: "#1D4062",
      },
      secondary: {
        main: "#F0AF2D",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-image" />
      <CssBaseline />
      <Box sx={{ paddingTop: "100px" }}>
        <MainPage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
