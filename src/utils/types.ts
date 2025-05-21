export interface Movie {
  id: number;
  title: string;
  overview?: string;
  backdrop_path?: string;
}

export interface ResultsProps {
  data: Movie[];
}

export interface SearchBoxProps {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  handleSearchInput(event: React.ChangeEvent<HTMLInputElement>): void;
  query: string;
  fetchMovieData: () => Promise<void>;
}
