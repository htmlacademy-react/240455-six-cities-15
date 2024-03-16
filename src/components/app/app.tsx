import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import { TypeOffer, TypeReview } from '../../types.ts';
import { getAuthorizationStatus } from '../../mock/authorizationStatus.ts';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
  offers: TypeOffer[];
  reviews: TypeReview[];
}

export default function App({offersCount, offers, reviews}: AppProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const favorites: Array<TypeOffer> = offers.filter((item) => item.isFavorite);
  const favoriteCount: number = favorites.length;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout favoriteCount={favoriteCount} />}
          >
            <Route
              index
              element={
                <Main
                  offersCount={offersCount}
                  offers={offers}
                />
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={
                <Offer
                  authorizationStatus={authorizationStatus}
                  offers={offers}
                  reviews={reviews}
                  onReview={() => {
                    throw new Error('Function \'onReview\' isn\'t implemented.');
                  }}
                />
              }
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites favorites={favorites} />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
