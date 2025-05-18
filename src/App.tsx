import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Results from "./components/Results";
const theme = createTheme({
  palette: {
    mode: "dark",
    background:{
      default: "#000000",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <SearchBox />
        <Results />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
