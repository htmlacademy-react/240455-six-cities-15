import { TypeOfferCard } from '../types.ts';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: TypeOfferCard[];
  near?: boolean;
}

export default function PlacesList({offers, near}: PlacesListProps): JSX.Element {

  let className = 'cities__places-list';

  if (near) {
    className = 'near-places__list';
  }

  const placesList = offers.map((offer) => (
    <PlaceCard key={offer.id} offer={offer} near = {near} />
  ));

  return (
    <div className={`${className} places__list${near ? '' : ' tabs__content'}`}>
      {placesList}
    </div>
  );
}
