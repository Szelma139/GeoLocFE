import { hasFlag } from "country-flag-icons";
import { ResponseType } from "../ResponseType";

export const ShortInfo = (props: ResponseType) => {
  const { countryCode, lat, lon, city, region } = props;
  console.log(props);
  return (
    <div>
      <p> Latitude: {lat}</p>
      <p> Longitude: {lon}</p>
      <p> Region {region}</p>
      <p> Country code {countryCode}</p>
      <p> City {city}</p>
      <div>
        {hasFlag(countryCode) === true && (
          <img
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
          />
        )}
      </div>
    </div>
  );
};
