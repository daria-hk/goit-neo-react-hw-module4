import { useEffect, useState } from "react";
import { fetchArticlesWithTopic } from "./articles-api.js";

const GalleryList = ({ items }) => (
  <ul>
    {items.map(
      ({
        tags,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) => (
        <li className="gallery-card" key={largeImageURL}>
          <a
            className="gallery-link"
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="gallery-img" src={webformatURL} alt={tags} />
            <div className="values-container">
              <ul className="labels">
                <li>Likes</li>
                <li>{likes}</li>
              </ul>
              <ul className="labels">
                <li>Views</li>
                <li>{views}</li>
              </ul>
              <ul className="labels">
                <li>Comments</li>
                <li>{comments}</li>
              </ul>
              <ul className="labels">
                <li>Downloads</li>
                <li>{downloads}</li>
              </ul>
            </div>
          </a>
        </li>
      )
    )}
  </ul>
);

export function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesWithTopic({
          q: "react",
          page: 1,
          per_page: 10,
        });
        setArticles(data.hits);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 ? (
        <GalleryList items={articles} />
      ) : (
        !loading && <p>No articles found!</p>
      )}
    </div>
  );
}

export default App;
