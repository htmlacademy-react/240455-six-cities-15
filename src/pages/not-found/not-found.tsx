import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

export default function NotFound(): JSX.Element {

  const style = {
    textAlign: 'center' as const,

  };

  return (
    <>
      <Helmet><title>6 cities: page not found</title></Helmet>
      <main style={style}>
        <h1>Page not found</h1>
        <p><Link to='/'>Return to Homepage</Link></p>
      </main>
    </>
  );
}
