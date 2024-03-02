import Header from '../../components/header';

export default function NotFound(): JSX.Element {

  const style = {
    textAlign: 'center' as const,

  };

  return (
    <div>
      <Header />
      <main style={style}>
        <h1>Page not found</h1>
        <p><a href='/'>Return to Homepage</a></p>
      </main>
    </div>
  );
}
