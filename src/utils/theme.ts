import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#11111b",
    },
    text: {
      primary: "#cdd6f4",
      secondary: "#bac2de",
    },
    action: {
      active: "#cba6f7",
    },
  },
});

export default theme;
