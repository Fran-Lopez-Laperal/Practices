const SearchPhotoForm = ({setSearchResults}) => {



    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            const searchParams = new URLSearchParams()
            console.log(searchParams)
        
            const queryForm = event.target.elements.search.value;

            searchParams.append("query", queryForm);
            searchParams.append("locale", "es-ES" );
            searchParams.append("per_pager", 80)

            const res = await fetch(`https://api.pexels.com/v1/search?query=${searchParams.toString()}`,
                {
                    headers: {
                        Authorization: "JPamWKTAJAig2hArqWkCcHPo3v2BAQitHQ6sfhNJF5j7fWcHDXsBETpS",
                    },
                    
                })

            const body = await res.json()

                setSearchResults(body.photos)    

        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Write your query:</label>
            <input id="search" name="search" type="search" />

            <button type="submit">Search</button>
        </form>
    )
}

export default SearchPhotoForm;