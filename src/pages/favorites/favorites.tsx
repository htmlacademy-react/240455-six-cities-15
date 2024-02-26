import { favorites } from '../../const.ts';
import { Offer } from '../../mock/offer.ts';
import Header from '../../components/header.tsx';
import PlaceCard from '../../components/place-card.tsx';
import Footer from './footer.tsx';

const favoritesGroupped: { [key: string]: Offer[] } = favorites.reduce((result, favorite) => ({
  ...result,
  [favorite.city.name]: [...(result[favorite.city.name] || []), favorite]
}), {} as { [key: string]: Offer[] });

export default function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favorites.map((offer) => (
                    <PlaceCard
                      key={offer.id}
                      offer={offer}
                      favorite
                    />))}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favorites.map((offer) => (
                    <PlaceCard
                      key={offer.id}
                      offer={offer}
                      favorite
                    />))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
