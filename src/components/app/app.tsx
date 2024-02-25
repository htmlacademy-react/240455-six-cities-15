import { Offer } from '../../mock/offer';
import { City } from '../../const';
import Main from '../../pages/main/main';

type AppProps = {
  offersCount: number;
  offers: Offer[];
  CITIES: City[];
}

export default function App({offersCount, offers, CITIES}: AppProps): JSX.Element {
  return (
    <Main
      offersCount={offersCount}
      offers={offers}
      CITIES={CITIES}
    />
  );
}
