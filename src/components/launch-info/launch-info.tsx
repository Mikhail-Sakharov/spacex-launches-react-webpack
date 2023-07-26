import {getDate} from '../../helpers';
import {Launch} from '../../types/launch.interface';

interface LaunchInfoProps {
  launch: Launch;
}

function LaunchInfo({launch}: LaunchInfoProps): JSX.Element {
  return (
    <li>
      <h2>{launch.name}</h2>
      <h5>{getDate(launch.date_utc)}</h5>
      <p>{launch.details}</p>
    </li>
  );
}

export default LaunchInfo;
