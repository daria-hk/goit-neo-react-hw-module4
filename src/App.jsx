import { useEffect, useState } from "react";
import { fetchPhotosForGallery } from "./unsplash-api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotosForGallery({
          query: "n",
          page: 1,
          per_page: 10,
        });
        setPhotos(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadPhotos();
  }, []);

  return (
    <div>
      <SearchBar />
      <h1>Latest articles</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 ? (
        <ImageGallery items={photos} />
      ) : (
        !loading && <p>No photos found!</p>
      )}
    </div>
  );
}

export default App;
