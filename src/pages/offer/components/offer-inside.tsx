type OfferInsideListProps = {
  goodsItem: string;
}

function OfferInsideList({goodsItem}: OfferInsideListProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {goodsItem}
    </li>
  );
}

type OfferInsideProps = {
  offerInside: string[];
}

export default function OfferInside({offerInside}: OfferInsideProps): JSX.Element {

  const newSet = new Set(offerInside);
  const goodsItems = Array.from(newSet);

  const offerInsideList = goodsItems.map((goodsItem) => (
    <OfferInsideList key={goodsItem} goodsItem={goodsItem} />
  ));

  return (
    <ul className="offer__inside-list">
      {offerInsideList}
    </ul>
  );
}
