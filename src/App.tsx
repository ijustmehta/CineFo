import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Results from "./components/Results";
import { useState, useEffect } from "react";
import theme from "./utils/theme";

const accessToken = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("MOVIE_SEARCH_QUERY");
    if (data) {
      fetchMovieData(JSON.parse(data));
      setQuery(JSON.parse(data));
    }
  }, []);

  const handleSearchInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuery(event.target.value);
  };

  const fetchMovieData = async (queryText: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${queryText}`;
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
      setResults(data.results);
    } catch (e) {
      console.log(`error while fetching data: ${e}`);
    }
    window.localStorage.setItem("MOVIE_SEARCH_QUERY", JSON.stringify(queryText));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SearchBox
        onClick={() => fetchMovieData(query)}
        query={query}
        handleSearchInput={handleSearchInput}
        fetchMovieData={() => fetchMovieData(query)}
      />
      <Results data={results} />
    </ThemeProvider>
  );
}

export default App;
