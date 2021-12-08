import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(3),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  
  return (
    <>
      <Typography variant="h5" component="h3">
      Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
       <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Countries" className={classes.chip} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Production Companies" className={classes.chip} color="primary" />
        </li>
        {movie.production_companies.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Languages Available" className={classes.chip} color="primary" />
        </li>
        {movie.spoken_languages.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
      <li>
          <Chip label="Budget" className={classes.chip} color="primary" />
        </li>
            <Chip
          icon={<MonetizationIcon />}
          label={`${movie.budget.toLocaleString()}`}
        />
      <li>
          <Chip label="Revenue" className={classes.chip} color="primary" />
        </li>
            <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>



  <Fab
  color="secondary"
  variant="extended"
  onClick={() =>setDrawerOpen(true)}
  className={classes.fab}
>
  <NavigationIcon />
  Reviews
</Fab>
<Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
  <MovieReviews movie={movie} />
</Drawer>
</>
);
};

export default  MovieDetails ;