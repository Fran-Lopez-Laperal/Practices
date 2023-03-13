import { useState } from "react";
import SearchPhotoForm from "../components/SearchPhotos/SearchPhotosFrom";
import PhotosList from "../components/SearchResults/PhotosList";

const SearchPhotos = ({ handlePhotoAdd }) => {

    const [searchResults, setSearchResults] = useState([]);

    return (
        <section id="search-photo">
            <h1>SearchPhotos</h1>
            <SearchPhotoForm setSearchResults={setSearchResults} />
            {searchResults.length ? (
                <PhotosList photos={searchResults} handlePhotoAdd={handlePhotoAdd} />
            ) : (
                <p>No results</p>
            )
            }

        </section>
    )
}

export default SearchPhotos;