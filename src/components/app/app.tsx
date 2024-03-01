import Main from '../../pages/main/main';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps): JSX.Element {
  return (
    <Main
      offersCount={offersCount}
    />
  );
}
