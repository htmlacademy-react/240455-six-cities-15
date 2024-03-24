import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../const';
import Logo from './ui/logo';

type HeaderProps = {
  linkClassName: string;
  authorizationStatus: AuthorizationStatus;
  pathname: AppRoute;
  favoriteCount: number;
}

export default function Header({linkClassName, authorizationStatus, pathname, favoriteCount}: HeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo linkClassName={linkClassName} width={81} height={41}/>
          </div>
          {pathname !== AppRoute.Login &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoriteCount}</span>
                    </> :
                    <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.Auth &&
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Root}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}
