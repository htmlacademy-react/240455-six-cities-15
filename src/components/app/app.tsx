import Main from '../../pages/main/main';

type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <Main errorsCount={errorsCount} />
  );
}

export default App;
