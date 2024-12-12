import { useEffect, useState } from "react";
import { fetchPhotosForGallery } from "./unsplash-api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotosForGallery({
          query: "nature",
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
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {photos.length > 0 ? (
        <ImageGallery items={photos} />
      ) : (
        !loading && <p>No photos found!</p>
      )}
    </div>
  );
}

export default App;
