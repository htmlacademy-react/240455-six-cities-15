import { STARS_COUNT } from '../../../const';

type ReviewsRatingStarProps = {
  starNumber: number;
}

function ReviewsRatingStar({starNumber}: ReviewsRatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={starNumber} id={`${starNumber}-stars`} type="radio" />
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default function ReviewsRatingForm(): JSX.Element {

  const array: number[] = [...Array(STARS_COUNT).keys()];

  const reviewsRatingForm = array.map((key) => (
    <ReviewsRatingStar key={key + 1} starNumber={key + 1} />
  ));

  return (
    <div className="reviews__rating-form form__rating">
      {reviewsRatingForm}
    </div>
  );
}
