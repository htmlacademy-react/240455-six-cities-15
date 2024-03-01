import { City } from '../../../const';
import LocationsItemLink from '../../../components/ui/locations-item-link';

type LocationsListItemsProps = {
  cityName: string;
  isActive: boolean;
}

function LocationsListItems({cityName, isActive}: LocationsListItemsProps): JSX.Element {
  return (
    <li className="locations__item">
      <LocationsItemLink city={cityName} tabsItem isActive={isActive} />
    </li>
  );
}

type LocationsListProps = {
  CITIES: City[];
}

export default function LocationsList({CITIES}: LocationsListProps): JSX.Element {

  const locationsListItems = CITIES.map((city) => (
    <LocationsListItems key={city.name} cityName={city.name} isActive={city.isActive} />
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
