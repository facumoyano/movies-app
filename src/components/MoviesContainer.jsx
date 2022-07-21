import { Box, Grid } from "@chakra-ui/react";
import { useContextMovies } from "../context/MoviesProvider";
import Movie from "./Movie";

const MoviesContainer = () => {
    const { movies, search } = useContextMovies();

    const moviesFiltradas = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box maxW="1200px" margin="0 auto">
            <Grid templateColumns="1fr 1fr 1fr 1fr">
                {moviesFiltradas.map((movie) => (
                    <Movie key={movie.uuid} movie={movie} />
                ))}
            </Grid>
        </Box>
    );
};

export default MoviesContainer;
