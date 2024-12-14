import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => (
  <ul className={css.galleryList}>
    {items.map(({ id, alt_description, urls: { small, full } }) => (
      <ImageCard
        key={id}
        id={id}
        alt_description={alt_description}
        urlSmall={small}
        urlFull={full}
      />
    ))}
  </ul>
);

export default ImageGallery;
