import { Nullable } from 'vitest';
import { useState } from 'react';
import { TypeOffer } from '../types.ts';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: TypeOffer[];
  near?: boolean;
}

export default function PlacesList({offers, near}: PlacesListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<TypeOffer>>(null);
  const handleActiveOffer = (offer?: TypeOffer) => setActiveOffer(offer || null);

  let className = 'cities__places-list';

  if (near) {
    className = 'near-places__list';
  }

  const placesList = offers.map((offer) => (
    <PlaceCard key={offer.id} offer={offer} near={near} onActiveOffer={handleActiveOffer} />
  ));

  return (
    <div className={`${className} places__list${near ? '' : ' tabs__content'}`}>
      {placesList}
    </div>
  );
}
