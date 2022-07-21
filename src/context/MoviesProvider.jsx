import { useContext, createContext, useState, useEffect } from "react";
import { fetchData, optionsApi } from "../api/fetchApi";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [generos, setGeneros] = useState([]);
    const [genero, setGenero] = useState("");
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetchData(
                "https://movies-app1.p.rapidapi.com/api/genres",
                optionsApi
            );
            setGeneros(data.results);
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetchData(
                `https://movies-app1.p.rapidapi.com/api/movies?genres=${genero}`,
                optionsApi
            );
            setMovies(data.results);
        };
        fetchMovies();
    }, [genero]);

    return (
        <MoviesContext.Provider
            value={{
                generos,
                genero,
                setGenero,
                movies,
                setSearch,
                search,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export const useContextMovies = () => {
    return useContext(MoviesContext);
};
