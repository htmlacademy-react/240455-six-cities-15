import { ChangeEvent } from 'react';
import { rating } from '../../../const';

type ReviewsRatingStarProps = {
  starNumber: number;
  starTitle: string;
  onChange: (value: string) => void;
}

function ReviewsRatingStar({starNumber, starTitle, onChange}: ReviewsRatingStarProps): JSX.Element {

  const handleStarCount = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  return (
    <>
      <input
        onChange={handleStarCount}
        className="form__rating-input visually-hidden" name="rating"
        value={starNumber} id={`${starNumber}-stars`}
        type="radio"
      />
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title={starTitle}>
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

  const reviewsRatingForm = rating.map(({value, title}) => (
    <ReviewsRatingStar key={value} starNumber={value} starTitle={title} onChange={onChange} />
  ));

  return (
    <div className="reviews__rating-form form__rating">
      {reviewsRatingForm}
    </div>
  );
}
