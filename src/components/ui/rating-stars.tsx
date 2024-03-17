import { RATING_MAX } from '../../const';

type RatingStarsProps = {
  rating: number;
  offerClass?: boolean;
}

export default function RatingStars({rating, offerClass}: RatingStarsProps): JSX.Element {

  const className = offerClass ? 'offer' : 'place-card';
  const ratingWidthStyle = `${rating * (100 / RATING_MAX)}%`;

  return (
    <div className={`${className}__stars rating__stars`}>
      <span style={{width: ratingWidthStyle}}></span>
      <span className="visually-hidden">Rating</span>
    </div>);
}
