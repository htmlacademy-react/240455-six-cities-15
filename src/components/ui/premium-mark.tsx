type PremiumMarkProps = {
  offerClass?: boolean;
}

export default function PremiumMark({offerClass}: PremiumMarkProps): JSX.Element {

  const className = offerClass ? 'offer' : 'place-card';

  return (<div className={`${className}__mark`}><span>Premium</span></div>);
}


