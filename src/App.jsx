import { useEffect, useState } from "react";
import { fetchPhotosForGallery } from "./unsplash-api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const initialValues = { search: "" };

  const handleSubmit = (values, actions) => {
    if (values.search.length > 0) {
      setQuery(values.search);
      setPage(1);
      actions.resetForm();
    }
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    setLoading(false);

    if (!query) return;

    async function loadPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotosForGallery({
          query,
          page,
          per_page: 12,
        });

        if (data.length > 0) {
          // new search, replace old photos, otherwise, add new phootos.
          if (page === 1) {
            setPhotos(data);
          } else {
            setPhotos((prevPhotos) => [...prevPhotos, ...data]);
          }
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
  }, [query, page]); //dependency on query and page

  return (
    <div>
      <SearchBar initialValues={initialValues} onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {photos.length > 0 ? (
        <>
          <ImageGallery items={photos} />
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        </>
      ) : (
        !loading && query && <p className="noPhotos">No photos found!</p>
      )}
    </div>
  );
}

export default App;
