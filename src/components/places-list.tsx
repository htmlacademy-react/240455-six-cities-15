import { Nullable } from 'vitest';
import { useEffect, useState } from 'react';
import { TypeOffer } from '../types.ts';
import PlaceCard from './place-card';

type PlacesListProps = {
  offers: TypeOffer[];
  near?: boolean;
  favorites?: boolean;
}

export default function PlacesList({offers, near, favorites}: PlacesListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<TypeOffer>>(null);
  const handleActiveOffer = (offer?: TypeOffer) => setActiveOffer(offer || null);

  useEffect(() => {

  }, [activeOffer]);

  let className = 'cities__places-list';

  if (near) {
    className = 'near-places__list';
  } else if (favorites) {
    className = 'favorites__places';
  }

  const placesList = offers.map((offer) => (
    <PlaceCard key={offer.id} offer={offer} near={near} onActiveOffer={handleActiveOffer} />
  ));

  return (
    <div className={`${className}${favorites ? '' : ' places__list'}${near ? '' : ' tabs__content'}`}>
      {placesList}
    </div>
  );
}
