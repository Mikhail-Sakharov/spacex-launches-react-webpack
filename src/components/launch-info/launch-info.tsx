import {getDate} from '../../helpers';
import {useGetRocketQuery} from '../../services/rockets-api.service';
import {Launch} from '../../types/launch.interface';

interface LaunchInfoProps {
  launch: Launch;
}

function LaunchInfo({launch}: LaunchInfoProps): JSX.Element {
  const {data} = useGetRocketQuery(launch.rocket ? launch.rocket : '');

  return (
    <li>
      <div style={{border: '1px solid gray', padding: '5px'}}>
        <div>
          <h2>{launch.name}</h2>
          <h5>{getDate(launch.date_utc)}</h5>
        </div>
        <div style={{display: 'flex'}}>
          {
            data && (
              <img src={data.flickr_images[0]} width={250}/>
            )
          }
          <p style={{marginLeft: '15px'}}>{launch.details}</p>
        </div>
      </div>
    </li>
  );
}

export default LaunchInfo;
