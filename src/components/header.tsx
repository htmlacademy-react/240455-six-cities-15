import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../const';
import Logo from './ui/logo';
import { favoriteCount } from '../const';

type HeaderProps = {
  linkClassName: string;
  authorizationStatus: AuthorizationStatus;
  pathname: AppRoute;
}

export default function Header({linkClassName, authorizationStatus, pathname}: HeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo linkClassName={linkClassName} width={81} height={41}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link className="header__nav-link header__nav-link--profile" to='#'>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoriteCount}</span>
                  </Link> :
                  pathname !== AppRoute.Login &&
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
              {authorizationStatus === AuthorizationStatus.Auth &&
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Root}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
