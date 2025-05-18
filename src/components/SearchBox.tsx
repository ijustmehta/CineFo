import { TextField, Button } from "@mui/material";

export default function SearchBox() {
  return (
    <div className="flex justify-center pt-8 gap-3">
      <TextField label="Search for a movie" className="w-200" />
      <Button variant="outlined">Search</Button>
    </div>
  );
}
