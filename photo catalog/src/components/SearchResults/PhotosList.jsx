import Photo from "../Photo/Photo"

const PhotosList = ({ photos, handlePhotoAdd, favorites, handleRemoveFromFavorites }) => {
    return (
        <ul className="photo-list">
            {photos.map((photo) => {
                return (
                    <li key={photo.id}>
                        <Photo handleRemoveFromFavorites={handleRemoveFromFavorites}  
                        photo={photo} 
                        handlePhotoAdd={handlePhotoAdd} 
                        favorites={favorites} />
                    </li>
                )
            })}
        </ul>
    )
}

export default PhotosList