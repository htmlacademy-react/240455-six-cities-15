import { ucFirst } from '../utils/common';
import PremiumMark from './ui/premium-mark';
import BookmarkButton from './ui/bookmark-button';

type PlaceCardProps = {
  type: string;
  title: string;
  isPremium: boolean;
  previewImage: string;
  price: number;
  isFavorite: boolean;
}

function PlaceCard({type, title, isPremium, previewImage, price, isFavorite}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {isPremium ? <PremiumMark/> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width:'80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ucFirst(title)}</a>
        </h2>
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
