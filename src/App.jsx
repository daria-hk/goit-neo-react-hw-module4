import { useEffect, useState } from "react";
import { fetchPhotosForGallery } from "./unsplash-api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage.jsx";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  const initialValues = { search: "" };

  const handleSubmit = (values, actions) => {
    console.log("Submitted values:", values);
    if (values.search.length > 0) {
      setQuery(values.search);
      actions.resetForm();
    }
  };

  useEffect(() => {
    setLoading(false);

    if (!query) return;
    async function loadPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotosForGallery({
          query,
          page: 1,
          per_page: 12,
        });
        console.log(data);
        if (data.length > 0) {
          setPhotos(data);
        } else {
          setPhotos([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      loadPhotos();
    }
  }, [query]);

  return (
    <div>
      <SearchBar initialValues={initialValues} onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {photos.length > 0 ? (
        <ImageGallery items={photos} />
      ) : (
        !loading && query && <p className="noPhotos">No photos found!</p>
      )}
    </div>
  );
}

export default App;
