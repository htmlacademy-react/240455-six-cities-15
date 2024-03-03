import {Link} from 'react-router-dom';
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
        <p><Link to='/'>Return to Homepage</Link></p>
      </main>
    </div>
  );
}
