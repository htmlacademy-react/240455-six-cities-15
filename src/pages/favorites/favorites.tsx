import { TypeOffer } from '../../types.ts';
import LocationsItemLink from '../../components/ui/locations-item-link.tsx';
import PlacesList from '../../components/places-list.tsx';

type FavoritesInCityProps = {
  city: string;
  offers: TypeOffer[];
}

function FavoritesInCity({city, offers }: FavoritesInCityProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <LocationsItemLink city={city} />
        </div>
      </div>
      <PlacesList offers={offers} favorites />
    </li>
  );
}

type FavoritesProps = {
  favorites: TypeOffer[];
}

export default function Favorites({favorites}: FavoritesProps): JSX.Element {

  const favoritesGroupped: { [city: string]: TypeOffer[] } = favorites.reduce((result, favorite) => ({
    ...result, [favorite.city.name]: [...(result[favorite.city.name] || []), favorite]
  }), {} as { [city: string]: TypeOffer[] });


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
