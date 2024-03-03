import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../header';
import Footer from '../../pages/favorites/components/footer';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let title = '';

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    title = ': authorization';
  } else if (pathname === AppRoute.Favorites) {
    title = ': favorites';
  } else if (pathname === AppRoute.Offer) {
    title = ': offer';
  } else {
    title = ': page not found';
  }

  return {rootClassName, linkClassName, title};
};

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

export default function Layout({authorizationStatus}: LayoutProps): JSX.Element {

  const {pathname} = useLocation();
  const {rootClassName, linkClassName, title} = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page${rootClassName}`}>
      <Helmet>
        <title>{`6 cities${title}`}</title>
      </Helmet>
      <Header linkClassName={linkClassName} authorizationStatus={authorizationStatus} pathname={pathname as AppRoute}/>
      <Outlet />
      {pathname as AppRoute === AppRoute.Favorites && <Footer />}
    </div>
  );
}
