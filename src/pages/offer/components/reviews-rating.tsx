import { ChangeEvent } from 'react';
import { STARS_COUNT } from '../../../const';

type ReviewsRatingStarProps = {
  starNumber: number;
  onChange: (value: string) => void;
}

function ReviewsRatingStar({starNumber, onChange}: ReviewsRatingStarProps): JSX.Element {

  const handleStarCount = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  return (
    <>
      <input
        onChange={handleStarCount}
        className="form__rating-input visually-hidden" name="rating"
        value={starNumber} id={`${starNumber}-stars`}
        type="radio"
      />
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type ReviewsRatingFormProps = {
  onChange: (value: string) => void;
}

export default function ReviewsRatingForm({onChange}: ReviewsRatingFormProps): JSX.Element {
  const stars: number[] = [...Array(STARS_COUNT).keys()];
  const starsReversed: number[] = stars.reverse();

  const reviewsRatingForm = starsReversed.map((key) => (
    <ReviewsRatingStar key={key + 1} starNumber={key + 1} onChange={onChange} />
  ));

  return (
    <div className="reviews__rating-form form__rating">
      {reviewsRatingForm}
    </div>
  );
}
