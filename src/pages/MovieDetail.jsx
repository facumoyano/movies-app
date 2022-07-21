import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, optionsApi } from "../api/fetchApi";
import { Box, Grid, Stack, Text, Heading, Image } from "@chakra-ui/react";

const MovieDetail = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchData(
                `https://movies-app1.p.rapidapi.com/api/movie/${id}`,
                optionsApi
            );
            setPelicula(data.result);
        };
        getMovie();
    }, []);

    return (
        <Box maxW="1200px" margin="0 auto" py={10}>
            <Grid templateColumns="0.4fr 1fr">
                <Image src={pelicula.image} alt={pelicula.title} />
                <Stack direction="column" width="70%" gap={3}>
                    <Stack direction="row" alignItems="flex-end">
                        <Heading fontSize="xl">Título:</Heading>
                        <Text>{pelicula.title}</Text>
                    </Stack>
                    <Stack direction="row" alignItems="flex-end">
                        <Heading fontSize="xl">Año:</Heading>
                        <Text>{pelicula.year}</Text>
                    </Stack>
                    <Stack direction="row" alignItems="flex-end">
                        <Heading fontSize="xl">Géneros:</Heading>
                        <Text>
                            {pelicula?.genres?.map((g) => (
                                <span key={g.uuid}>{g.name} </span>
                            ))}
                        </Text>
                    </Stack>
                    <Stack direction="row" alignItems="flex-end">
                        <Heading fontSize="xl">Lanzamiento:</Heading>
                        <Text>{pelicula.release}</Text>
                    </Stack>
                    <Stack direction="row">
                        <Heading fontSize="xl">Rating:</Heading>
                        <Text lineHeight={8}>{pelicula.rating}</Text>
                    </Stack>
                    <Stack direction="row">
                        <Heading fontSize="xl">Descipción:</Heading>
                        <Text lineHeight={8}>{pelicula.description}</Text>
                    </Stack>
                </Stack>
            </Grid>
        </Box>
    );
};

export default MovieDetail;
