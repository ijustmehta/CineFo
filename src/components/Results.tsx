import type { ResultsProps } from "../utils/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const baseImageUrl = `https://image.tmdb.org/t/p/w500/`;

export default function Results({ data }: ResultsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8  md:pl-40 md:pr-40 md:pt-10 md:pb-10 pb-5 pt-5 ">
      {data.map(
        (res) =>
          res.backdrop_path &&
          res.overview && (
            <Card
              style={{ backgroundColor: "#1e1e2e" }}
              key={res.id}
              sx={{
                maxWidth: 300,
                borderRadius: 2,
              }}
              className=""
            >
              <CardMedia
                component="img"
                image={`${baseImageUrl}${res.backdrop_path}`}
                sx={{ height: 150, objectFit: "cover", width: "100%" }}
              />
              <CardContent>
                <Typography variant="h5">{res.title}</Typography>
                <Typography
                  className="pt-5"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {res.overview}
                </Typography>
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
}
