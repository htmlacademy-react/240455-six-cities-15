type MapProps = {
  offerClass?: string;
}

export default function Map(offerClass: MapProps): JSX.Element {

  const className = offerClass ? 'offer' : 'cities';

  return (
    <section className={`${className}__map map`}></section>
  );
}
