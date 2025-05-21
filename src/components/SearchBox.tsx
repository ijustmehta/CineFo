import { TextField, Button } from "@mui/material";
import type { SearchBoxProps } from "../utils/types";

export default function SearchBox({
  onClick,
  handleSearchInput,
  query,
  fetchMovieData,
}: SearchBoxProps) {
  return (
    <div className="flex justify-center pt-8 md:gap-3 gap-1 md:p-4 p-14">
      <TextField
        size="small"
        style={{ color: "#cdd6f4" }}
        label="Search for a movie"
        className="w-200 "
        onChange={handleSearchInput}
        value={query}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchMovieData();
          }
        }}
      />
      <Button
        style={{ color: "#f2cdcd" }}
        onClick={onClick}
        variant="outlined"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
}
