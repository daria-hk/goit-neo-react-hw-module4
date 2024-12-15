import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );

  return (
    <ul className={css.galleryList}>
      {uniqueItems.map(({ id, alt_description, urls: { small, regular } }) => (
        <ImageCard
          key={id}
          id={id}
          alt_description={alt_description}
          urlSmall={small}
          urlRegular={regular}
          onImageClick={() => onImageClick(regular)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
