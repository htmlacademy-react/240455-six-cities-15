import {Link} from 'react-router-dom';

export default function NotFound(): JSX.Element {

  const style = {
    textAlign: 'center' as const,

  };

  return (
    <main style={style}>
      <h1>Page not found</h1>
      <p><Link to='/'>Return to Homepage</Link></p>
    </main>
  );
}
