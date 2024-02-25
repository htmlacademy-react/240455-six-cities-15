import { City } from '../../../const';
import { ucFirst } from '../../../utils/common';

type LocationsListItemsProps = {
  cityName: string;
  isActive: boolean;
  activeItemClass: string;
}

function LocationsListItems({cityName, isActive, activeItemClass}: LocationsListItemsProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item${isActive ? activeItemClass : ''}`} href="#">
        <span>{ucFirst(cityName)}</span>
      </a>
    </li>
  );
}

type LocationsListProps = {
  CITIES: City[];
}

export default function LocationsList({CITIES}: LocationsListProps): JSX.Element {

  const activeItemClass = ' tabs__item--active';

  const locationsListItems = CITIES.map((city) => (
    <LocationsListItems key={city.name} cityName={city.name} isActive={city.isActive} activeItemClass={activeItemClass} />
  ));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locationsListItems}
        </ul>
      </section>
    </div>
  );
}
