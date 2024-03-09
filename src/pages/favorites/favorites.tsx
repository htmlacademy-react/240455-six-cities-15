import { TypeOfferCard } from '../../types.ts';
import LocationsItemLink from '../../components/ui/locations-item-link.tsx';
import PlaceCard from '../../components/place-card.tsx';

type FavoritesInCityProps = {
  city: string;
  offers: TypeOfferCard[];
}

function FavoritesInCity({city, offers }: FavoritesInCityProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <LocationsItemLink city={city} />
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            favorite
          />))}
      </div>
    </li>
  );
}

type FavoritesProps = {
  favorites: TypeOfferCard[];
}

export default function Favorites({favorites}: FavoritesProps): JSX.Element {

  const favoritesGroupped: { [city: string]: TypeOfferCard[] } = favorites.reduce((result, favorite) => ({
    ...result, [favorite.city.name]: [...(result[favorite.city.name] || []), favorite]
  }), {} as { [city: string]: TypeOfferCard[] });


  const cities = Object.keys(favoritesGroupped);

  const favoritesList = cities.map((city) => <FavoritesInCity key={city} city={city} offers={favoritesGroupped[city]} />);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoritesList}
          </ul>
        </section>
      </div>
    </main>
  );
}
