import { reviews } from '../../../const';
import { Review } from '../../../mock/review';

type ReviewsListItemsProps = {
  review: Review;
}

function ReviewsListItems({review}: ReviewsListItemsProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src= {review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width:'80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
      </div>
    </li>
  );
}

export default function ReviewsList(): JSX.Element {

  const reviewsListItems = reviews.map((review) => (
    <ReviewsListItems key={review.id} review={review} />
  ));

  return (
    <ul className="reviews__list">
      {reviewsListItems}
    </ul>
  );
}
