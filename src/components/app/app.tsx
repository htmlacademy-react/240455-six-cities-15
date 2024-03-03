import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, auth } from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout authorizationStatus={auth} />}
          >
            <Route
              index
              element={<Main offersCount={offersCount} />}
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer />}
            />
            <Route
              path={AppRoute.Login}
              element={
                //<PrivateRoute authorizationStatus={auth}>
                  <Login />
                //</PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={auth}>
                  <Favorites />
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
