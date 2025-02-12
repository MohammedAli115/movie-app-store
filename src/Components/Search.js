import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Search() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const handleInputSearch = (e) => {
        setSearch(e.target.value);
    };
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=79d6f77e`)
            .then(response => response.json())
            .then(data => setMovies(data.Search || []));
    }, [search]);
    return (
        <div>
            <div className="input-group mb-3 w-lg-75 m-auto">
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass text-warning"></i></span>
                <input type="text" className="form-control shadow-none" value={search} onChange={handleInputSearch} placeholder="Search for movies..." aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <Cards movies={movies} />
        </div>
    );
}