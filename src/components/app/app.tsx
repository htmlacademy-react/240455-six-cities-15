import { Offer } from '../../mock/offer';
import Main from '../../pages/main/main';

type AppProps = {
  offersCount: number;
  offers: Offer[];
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return (
    <Main
      offersCount={offersCount}
      offers={offers}
    />
  );
}

export default App;
