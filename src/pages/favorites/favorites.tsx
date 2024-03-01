import { favorites } from '../../const.ts';
import { OfferType } from '../../types.ts';
import Header from '../../components/header.tsx';
import LocationsItemLink from '../../components/ui/locations-item-link.tsx';
import PlaceCard from '../../components/place-card.tsx';
import Footer from './components/footer.tsx';

const favoritesGroupped: { [city: string]: OfferType[] } = favorites.reduce((result, favorite) => ({
  ...result, [favorite.city.name]: [...(result[favorite.city.name] || []), favorite]
}), {} as { [city: string]: OfferType[] });

type FavoritesInCityProps = {
  city: string;
  offers: OfferType[];
}

function FavoritesInCity({city, offers}: FavoritesInCityProps): JSX.Element {
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

export default function Favorites(): JSX.Element {

  const cities = Object.keys(favoritesGroupped);

  const favoritesList = cities.map((city) => <FavoritesInCity key={city} city={city} offers={favoritesGroupped[city]} />);

  return (
    <div className="page">
      <Header />
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
      <Footer />
    </div>
  );
}
