import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps): JSX.Element {
  return (
    // <Main
    //   offersCount={offersCount}
    // />
    <Offer />
  );
}
