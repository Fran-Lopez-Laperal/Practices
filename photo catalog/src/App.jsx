import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchPhotos from './pages/SearchPhotos'
import { MyPhotos } from './components/MyPhotos/MyPhotos';

function App() {

  const storeFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [favorites, setFavorites] = useState(storeFavorites);
  const [showingPages, setShowingPages] = useState("search-photos");
  console.log(favorites)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));


  }, [favorites])


  const handlePhotoAdd = (photoAdd) => {
    const unicPhoto = favorites.find((photo) => photo.id === photoAdd.id )
   
    if (!unicPhoto){
      setFavorites([...favorites, photoAdd])
    }
  };


  const handleRemoveFromFavorites = (photoToRemove) => {
    const photosFiltered = favorites.filter((photo) => {
      photo.id !== photoToRemove
    })

    setFavorites(photosFiltered)
  }



  return (
    <>
      <header>
        <h1>Photo catalog</h1>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  setShowingPages("my-photos")
                }}
              >My photos</button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowingPages("search-photos")
                }}
              >
                Search new photos
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {showingPages === "search-photos" ? <SearchPhotos handlePhotoAdd={handlePhotoAdd} />
          :
          <MyPhotos
            favorites={favorites}
            handleRemoveFromFavorites={handleRemoveFromFavorites} />
        }


      </main>
      <footer>
        <p>Fran López 2023@</p>
      </footer>
    </>
  )
}

export default App
