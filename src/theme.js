import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#195c70",
    },
    secondary: {
      main: "#377ea4",
    },
    text: {
      primary: "#5e5e5e",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "2.2rem",
      fontFamily: "Montserrat",
      letterSpacing: "0.05em",
      fontWeight: 800,
      margin: 0,
      color: "#195c70",
      wordBreak: "break-all",
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: 400,
      margin: 0,
      color: "#5e5e5e",
      wordBreak: "break-all",
    },
    h3: {
      fontSize: "0.9rem",
      fontWeight: 550,
      letterSpacing: "0.05em",
      margin: 0,
      color: "#377ea4",
      wordBreak: "break-all",
    },
    h4: {
      fontSize: "0.8rem",
      fontWeight: 400,
      margin: 0,
      color: "#5e5e5e",
      lineHeight: 1.5,
      wordBreak: "break-all",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
