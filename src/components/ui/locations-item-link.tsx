type LocationsItemLinkProps = {
  city: string;
  tabsItem?: string;
  isActive?: boolean;
}

const activeItemClass = ' tabs__item--active';

export default function LocationsItemLink({city, tabsItem, isActive}: LocationsItemLinkProps): JSX.Element {
  return (
    <a className={`locations__item-link${tabsItem ? tabsItem : ''}${isActive ? activeItemClass : ''}`} href="#">
      <span>{city}</span>
    </a>
  );
}
