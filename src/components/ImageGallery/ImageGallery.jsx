const ImageGallery = ({ items }) => (
  <ul className="gallery-list">
    {items.map(({ id, alt_description, urls: { small, full } }) => (
      <li className="gallery-card" key={id}>
        <a
          className="gallery-link"
          href={full}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="gallery-img" src={small} alt={alt_description} />
        </a>
      </li>
    ))}
  </ul>
);

export default ImageGallery;
