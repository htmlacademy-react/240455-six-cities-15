type PremiumMarkProps = {
  offerMark?: string;
}

export default function PremiumMark({offerMark}: PremiumMarkProps): JSX.Element {
  return (<div className={`${offerMark ? offerMark : 'place-card__mark'}`}><span>Premium</span></div>);
}


