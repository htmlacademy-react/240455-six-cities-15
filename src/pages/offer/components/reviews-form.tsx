import {useState, FormEvent, ChangeEvent } from 'react';
import ReviewsRatingForm from './reviews-rating';

type ReviewsProps = {
  onReview: (review: ChangeEvent<HTMLTextAreaElement> | string, starCount: string) => void;
}

export default function ReviewsForm({onReview}: ReviewsProps): JSX.Element {

  const [review, setReview] = useState('');
  const handleReview = (event: ChangeEvent<HTMLTextAreaElement>) => setReview(event.target.value);

  const [starCount, setStarCount] = useState('0');

  const isDisable: boolean = review.length < 50 || review.length > 300 || starCount === '0';

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onReview(review, starCount);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewsRatingForm onChange={setStarCount} />
      <textarea onChange={handleReview} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisable}>Submit</button>
      </div>
    </form>
  );
}
