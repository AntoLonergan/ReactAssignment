import React from "react";
import MovieReviewPage from "./pages/movieReviewPage";
import ReactDOM from "react-dom";
import SiteHeader from './components/siteHeader'
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import PopularMovies from "./pages/popularMovies";
import TopMoviesPage from "./pages/topMoviesPage";
import CurrentlyPage from "./pages/currently";
import movieDetailsPage from "./pages/movieDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <Route exact path="/movies/socials" component={movieDetailsPage} />
            <Route exact path="/movies/currently" component={CurrentlyPage} />
            <Route exact path="/movies/toprated" component={TopMoviesPage} />
            <Route exact path="/movies/popular" component={PopularMovies} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
