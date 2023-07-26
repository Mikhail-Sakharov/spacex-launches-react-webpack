import {getDate} from '../../helpers';
import {useGetRocketQuery} from '../../services/rockets-api.service';
import {Launch} from '../../types/launch.interface';
import {Rocket} from '../../types/rocket.interface';

interface LaunchInfoProps {
  launch: Launch;
}

function LaunchInfo({launch}: LaunchInfoProps): JSX.Element {
  const {data} = useGetRocketQuery(launch.rocket ? launch.rocket : '');

  return (
    <li>
      <h2>{launch.name}</h2>
      <h5>{getDate(launch.date_utc)}</h5>
      <p>{launch.details}</p>
      {
        data && (
          <img src={data.flickr_images[0]} width={250}/>
        )
      }
    </li>
  );
}

export default LaunchInfo;
