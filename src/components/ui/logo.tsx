import {Link} from 'react-router-dom';

type LogoProps = {
  footerClass?: boolean;
  width: number;
  height: number;
}

export default function Logo({footerClass, width, height}: LogoProps): JSX.Element {

  const className = footerClass ? 'footer' : 'header';

  return (
    <Link to='/' className={`${className}__logo-link header__logo-link--active`}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}
