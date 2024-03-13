import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const.ts';
import {offer, offers, offersNear, favorites, favoriteCount } from './mock/offer.ts';
import { reviews } from './mock/review.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OffersCount}
      offer={offer} offers={offers}
      offersNear={offersNear}
      favorites={favorites}
      favoriteCount={favoriteCount}
      reviews={reviews}
    />
  </React.StrictMode>,
);
