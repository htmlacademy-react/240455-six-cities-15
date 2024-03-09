import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import { TypeOffer, TypeOfferCard, TypeReview } from '../../types.ts';
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
  offer: TypeOffer;
  offers: TypeOfferCard[];
  offersNear: TypeOfferCard[];
  favorites: TypeOfferCard[];
  favoriteCount: number;
  reviews: TypeReview[];
}

export default function App({offersCount, offer, offers, offersNear, favorites, favoriteCount, reviews}: AppProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

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
              element={<Main offersCount={offersCount} offers={offers} />}
            />
            <Route
              path={AppRoute.Offer}
              element={
                <Offer authorizationStatus={authorizationStatus} offer={offer} offersNear={offersNear} reviews={reviews} />
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
