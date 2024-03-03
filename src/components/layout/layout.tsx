import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../header';
import Footer from '../../pages/favorites/components/footer';
import { getLayoutState } from '../../utils/common';

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
