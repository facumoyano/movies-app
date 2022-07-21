import React from "react";
import { Box, Image, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
    return (
        <Box m={5}>
            <Stack direction="column" gap={2}>
                <Image
                    src={movie.image}
                    alt={movie.title}
                    width={300}
                    height={300}
                    objectFit="cover"
                />
                <Heading fontSize="2xl">{movie.title}</Heading>
                <Text fontWeight="bold">
                    Generos:{" "}
                    {movie.genres.map((genero) => (
                        <span key={genero.uuid} style={{ fontWeight: "400" }}>
                            {" "}
                            {genero.name}{" "}
                        </span>
                    ))}
                </Text>
                <Button type="button">
                    <Link to={`movie/${movie._id}`}>Ver más</Link>
                </Button>
            </Stack>
        </Box>
    );
};

export default Movie;
