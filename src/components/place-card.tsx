import { ucFirst } from '../utils/common';
import { Offer } from '../mock/offer.ts';
import PremiumMark from './ui/premium-mark';
import BookmarkButton from './ui/bookmark-button';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard({offer}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {offer.isPremium ? <PremiumMark/> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width:'80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ucFirst(offer.title)}</a>
        </h2>
        <p className="place-card__type">{ucFirst(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
