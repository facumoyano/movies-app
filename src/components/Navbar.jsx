import React from "react";
import { useContextMovies } from "../context/MoviesProvider";
import {
    Select,
    Input,
    Box,
    Heading,
    Stack,
    Divider,
    useColorMode,
    IconButton,
    Text,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { generos, genero, setGenero, setSearch } = useContextMovies();
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();

    return (
        <Box as="nav">
            <Stack
                direction="row"
                maxW="1200px"
                m="0 auto"
                alignItems="center"
                p={4}
            >
                <Heading
                    fontSize="2xl"
                    cursor="pointer"
                    onClick={() => navigate("/")}
                >
                    Pelis
                    <Text as="span" fontSize="2xl" color="green.400">
                        API
                    </Text>
                </Heading>
                <Divider />
                <Stack direction="row" alignItems="center" gap={4} width="80%">
                    <IconButton
                        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
                        onClick={toggleColorMode}
                        bg="transparent"
                    />
                    <Select
                        placeholder="Generos"
                        maxW="500px"
                        margin="0 auto"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    >
                        {generos.map((genero) => (
                            <option key={genero.uuid} value={genero.uuid}>
                                {" "}
                                {genero.name}{" "}
                            </option>
                        ))}
                    </Select>
                    <Input
                        type="text"
                        placeholder="Buscar"
                        my={4}
                        onChange={(e) => setSearch(e.target.value)}
                        width="100%"
                        mx={10}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default Navbar;
