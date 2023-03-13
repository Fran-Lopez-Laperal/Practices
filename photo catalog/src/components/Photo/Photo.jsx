const Photo = ({ photo, handlePhotoAdd, handleRemoveFromFavorites }) => {


    return (
        <>
            <img src={photo.src.small} alt={photo.src.alt} />
            {handlePhotoAdd &&

                <button
                    onClick={() => {
                        handlePhotoAdd(photo);
                    }}
                >
                    Añadir a favoritos
                </button>
            }

            {handleRemoveFromFavorites &&
                <button button
                    onClick={() => { (handleRemoveFromFavorites(photo)) }}
                >
                    Remove Photo
                </button>
            }

        </>
    )
}


export default Photo;

