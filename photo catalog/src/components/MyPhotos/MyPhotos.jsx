import PhotosList from "../SearchResults/PhotosList"

export const MyPhotos = ({ favorites, handleRemoveFromFavorites }) => {
    return (
        <>
            <section>
                <h1>My Photos</h1>
                {favorites.length ? <PhotosList
                    photos={favorites}
                    handleRemoveFromFavorites={handleRemoveFromFavorites} />
                    :
                    <p>No hay fotos favoritas</p>
                }
            </section>

        </>
    )
}