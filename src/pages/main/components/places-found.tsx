import { City } from '../../../const';

type PlacesFoundProps = {
  offersCount: number;
  CITIES: City[];
}

export default function PlacesFound({offersCount, CITIES}: PlacesFoundProps): JSX.Element {

  const currentCity = CITIES.filter((city) => city.isActive);

  return (
    <b className="places__found">{offersCount} places to stay in {currentCity[0].name}</b>
  );
}
