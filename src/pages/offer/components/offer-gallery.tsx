type OfferGalleryListProps = {
  image: string;
}

function OfferGalleryList({image}: OfferGalleryListProps): JSX.Element {
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

  const offerGalleryList = gallery.map((image) => (
    <OfferGalleryList key={image} image={image} />
  ));

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offerGalleryList}
      </div>
    </div>
  );
}
