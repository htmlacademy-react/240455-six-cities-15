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
  goods: string[];
}

export default function OfferInside({goods}: OfferInsideProps): JSX.Element {

  const offerInsideList = goods.map((goodsItem) => (
    <OfferInsideList key={goodsItem} goodsItem={goodsItem} />
  ));

  return (
    <ul className="offer__inside-list">
      {offerInsideList}
    </ul>
  );
}
