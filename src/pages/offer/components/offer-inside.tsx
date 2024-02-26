type OfferInsideListItemsProps = {
  goodsItem: string;
}

function OfferInsideListItems({goodsItem}: OfferInsideListItemsProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {goodsItem}
    </li>
  );
}

type OfferInsideListProps = {
  offerInsideList: string[];
}

export default function OfferInside({offerInsideList}: OfferInsideListProps): JSX.Element {
  const newSet = new Set(offerInsideList);
  const goodsItems = Array.from(newSet);
  const offerInsideListItems = goodsItems.map((goodsItem) => (
    <OfferInsideListItems key={goodsItem} goodsItem={goodsItem} />
  ));

  return (
    <ul className="offer__inside-list">
      {offerInsideListItems}
    </ul>
  );
}
