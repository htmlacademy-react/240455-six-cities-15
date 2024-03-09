import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import Header from '../header.tsx';
import Footer from '../../pages/favorites/components/footer.tsx';
import { getLayoutState } from '../../utils/common.ts';
import { getAuthorizationStatus } from '../../mock/authorizationStatus.ts';

type LayoutProps = {
  favoriteCount: number;
}

export default function Layout({favoriteCount}: LayoutProps): JSX.Element {

  const {pathname} = useLocation();
  const {rootClassName, linkClassName, title} = getLayoutState(pathname as AppRoute);
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page${rootClassName}`}>
      <Helmet>
        <title>{`6 cities${title}`}</title>
      </Helmet>
      <Header linkClassName={linkClassName} authorizationStatus={authorizationStatus} pathname={pathname as AppRoute} favoriteCount={favoriteCount} />
      <Outlet />
      {pathname as AppRoute === AppRoute.Favorites && <Footer />}
    </div>
  );
}
