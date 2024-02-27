import { offersNear, REVIEWS_COUNT } from '../../const';
import Header from '../../components/header';
import OfferGallery from './components/offer-gallery';
import PremiumMark from '../../components/ui/premium-mark';
import BookmarkButton from '../../components/ui/bookmark-button';
import OfferInside from './components/offer-inside';
import ReviewsList from './components/reviews-list';
import ReviewsForm from './components/reviews-form';
import Map from '../../components/map';

import PlaceCard from '../../components/place-card';

const offer = offersNear[0];

export default function Offer(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery gallery={offer.images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ? <PremiumMark offerMark={'offer__mark'} /> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <BookmarkButton isFavorite={offer.isFavorite} offerClass width={31} height={33} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width:'80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInside offerInside={offer.goods} />
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.isPro}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{REVIEWS_COUNT}</span></h2>
                <ReviewsList />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map offerClass />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNear.map((offerNear) => (
                <PlaceCard
                  key={offerNear.id}
                  offer={offerNear}
                  near
                />))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
