import css from "./ImageCard.module.css";

const ImageCard = ({ id, alt_description, urlSmall, urlRegular }) => (
  <li className={css.galleryCard} key={id}>
    <a
      className="gallery-link"
      href={urlRegular}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="gallery-img" src={urlSmall} alt={alt_description} />
    </a>
  </li>
);

export default ImageCard;
