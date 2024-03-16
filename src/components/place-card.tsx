import { Link } from 'react-router-dom';
import { ucFirst } from '../utils/common';
import { TypeOffer } from '../types.ts';
import PremiumMark from './ui/premium-mark';
import BookmarkButton from './ui/bookmark-button';
import RatingStars from './ui/rating-stars.tsx';

type PlaceCardProps = {
  offer: TypeOffer;
  favorite?: boolean;
  near?: boolean;
  onActiveOffer: (offer?: TypeOffer) => void;
}

export default function PlaceCard({offer, favorite, near, onActiveOffer}: PlaceCardProps): JSX.Element {
  let className = 'cities';

  if (favorite) {
    className = 'favorites';
  } else if (near) {
    className = 'near-places';
  }

  const handleOfferHover = () => !near && !favorite ? onActiveOffer(offer) : '';
  const handleOfferLeave = () => !near && !favorite ? onActiveOffer() : '';

  return (

    <article className={`${className}__card place-card`} onMouseEnter={handleOfferHover} onMouseLeave={handleOfferLeave}>
      {offer.isPremium && <PremiumMark/>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to=''>
          <img className="place-card__image" src={offer.previewImage} width={`${favorite ? '150' : '260'}`} height={`${favorite ? '110' : '200'}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${favorite ? 'favorites__card-info ' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={offer.isFavorite} width={18} height={19} />
        </div>
        <div className="place-card__rating rating">
          <RatingStars rating={offer.rating} />
        </div>
        <h2 className="place-card__name">
          <Link to='#'>{ucFirst(offer.title)}</Link>
        </h2>
        <p className="place-card__type">{ucFirst(offer.type)}</p>
      </div>
    </article>
  );
}
