import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Results from "./components/Results";
import { useState } from "react";
import theme from "./utils/theme";

const accessToken = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuery(event.target.value);
  };

  const fetchMovieData = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResults(data.results || []);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SearchBox
        onClick={fetchMovieData}
        query={query}
        handleSearchInput={handleSearchInput}
        fetchMovieData={fetchMovieData}
      />
      <Results data={results} />
    </ThemeProvider>
  );
}

export default App;
