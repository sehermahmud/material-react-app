import { createMuiTheme } from "@material-ui/core/styles";

const arcRedPink = "#ff66a3";
const arcBlue = "#ffbb66";

export default createMuiTheme({
  palette: {
    common: {
      redPink: arcRedPink,
      blue: arcBlue,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcRedPink,
    },
  },
  typography: {
    tab: {
      fontFamily: "Merienda One",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    estimate: {
      fontFamily: "Merienda One",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Kalam",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcRedPink,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcRedPink,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcRedPink,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 300,
      color: arcBlue,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1.25rem",
      color: arcBlue,
      fontWeight: 300,
    }, 
    learnButton: {
      borderColor: arcRedPink,
      borderWidth: 2,
      textTransform: "none",
      color: arcRedPink,
      borderRadius: 50,
      fontFamily: "Kalam",
      fontWeight: "bold",
    },
  },
});
