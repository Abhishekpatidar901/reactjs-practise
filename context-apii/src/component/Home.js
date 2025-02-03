import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home =()=>{
    const {theme,toggleTheme} = useContext(ThemeContext);

    return(
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>toggleTheme</button>
            </div>
    );
};


export default Home;