import css from "./ImageCard.module.css";

const ImageCard = ({
  id,
  alt_description,
  urlSmall,
  urlRegular,
  onImageClick,
}) => (
  <li className={css.galleryCard} key={id}>
    <img
      src={urlSmall}
      alt={alt_description}
      onClick={(e) => {
        e.preventDefault();
        onImageClick(urlRegular);
      }}
    />
  </li>
);

export default ImageCard;
