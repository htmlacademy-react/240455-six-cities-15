import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../header';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
  }

  return {rootClassName, linkClassName};
};

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

export default function Layout({authorizationStatus}: LayoutProps): JSX.Element {

  const {pathname} = useLocation();
  const {rootClassName, linkClassName} = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page${rootClassName}`}>
      {/* <Helmet>
        <title>{title}</title>
      </Helmet> */}
      <Header linkClassName={linkClassName} authorizationStatus={authorizationStatus} pathname={pathname as AppRoute}/>
      <Outlet />
    </div>
  );
}
