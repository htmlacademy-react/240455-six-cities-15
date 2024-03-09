import { CITIES } from '../../const';
import { TypeOfferCard } from '../../types.ts';
import LocationsList from './components/locations-list.tsx';
import PlacesFound from './components/places-found.tsx';
import PlacesSorting from './components/places-sorting.tsx';
import PlaceCard from '../../components/place-card.tsx';
import Map from '../../components/map.tsx';

type MainProps = {
  offersCount: number;
  offers: TypeOfferCard[];
}

export default function Main({offersCount, offers}: MainProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList CITIES={CITIES} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound offersCount={offersCount} CITIES={CITIES} />
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <PlaceCard
                  key={offer.id}
                  offer={offer}
                />))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}
