type GalleryListItemsProps = {
  image: string;
}

function GalleryListItems({image}: GalleryListItemsProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  );
}

type OfferGalleryProps = {
  gallery: string[];
}

export default function OfferGallery({gallery}: OfferGalleryProps): JSX.Element {

  const offerGalleryListItems = gallery.map((image) => (
    <GalleryListItems key={image} image={image} />
  ));

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offerGalleryListItems}
      </div>
    </div>
  );
}
