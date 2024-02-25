import { SORTING } from '../../../const';
import { ucFirst } from '../../../utils/common';

type PlacesSortingItemsProps = {
  sortName: string;
  isActive: boolean;
  activeItemClass: string;
}

function PlacesSortingItems({sortName, isActive, activeItemClass}: PlacesSortingItemsProps): JSX.Element {
  return (
    <li className={`places__option${isActive ? activeItemClass : ''}`} tabIndex={0}>{ucFirst(sortName)}</li>
  );
}

const activeItemClass = ' places__option--active';

const currentSort = SORTING.map((sort) => (sort.isActive ? sort.name : ''));

const placesSortingItems = SORTING.map((sort) => (
  <PlacesSortingItems key={sort.name} sortName={sort.name} isActive={sort.isActive} activeItemClass={activeItemClass} />
));

export default function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {placesSortingItems}
      </ul>
    </form>
  );
}
