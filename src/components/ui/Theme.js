import { createMuiTheme } from "@material-ui/core/styles";

const arcRedPink = "#ff66a3";
const arcBlue = "#ffbb66";

export default createMuiTheme({
  palette: {
    common: {
      redPink: `${arcRedPink}`,
      blue: `${arcBlue}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcRedPink}`,
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
			color: "white"
    },
  },
});
