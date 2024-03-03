import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import Header from '../../components/header';

export default function NotFound(): JSX.Element {

  const style = {
    textAlign: 'center' as const,

  };

  return (
    <div>
      <Helmet>
        <title>6 cities: page not found</title>
      </Helmet>
      <Header />
      <main style={style}>
        <h1>Page not found</h1>
        <p><Link to='/'>Return to Homepage</Link></p>
      </main>
    </div>
  );
}
