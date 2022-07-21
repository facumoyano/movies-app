import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoviesProvider } from "./context/MoviesProvider";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MoviesProvider>
            <ChakraProvider>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <App />
            </ChakraProvider>
        </MoviesProvider>
    </React.StrictMode>
);
