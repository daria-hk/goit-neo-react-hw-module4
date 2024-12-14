const ImageCard = ({ id, alt_description, urlSmall, urlFull }) => (
  <li className="gallery-card" key={id}>
    <a
      className="gallery-link"
      href={urlFull}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="gallery-img" src={urlSmall} alt={alt_description} />
    </a>
  </li>
);

export default ImageCard;
