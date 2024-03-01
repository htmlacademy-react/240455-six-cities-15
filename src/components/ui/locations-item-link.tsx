type LocationsItemLinkProps = {
  city: string;
  tabsItem?: boolean;
  isActive?: boolean;
}

const activeItemClass = ' tabs__item--active';

export default function LocationsItemLink({city, tabsItem, isActive}: LocationsItemLinkProps): JSX.Element {
  return (
    <a className={`locations__item-link${tabsItem ? ' tabs__item' : ''}${isActive ? activeItemClass : ''}`} href="#">
      <span>{city}</span>
    </a>
  );
}
