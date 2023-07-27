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
      <div className='launches-list__item'>
        <div>
          <h2>{launch.name}</h2>
          <h5>{getDate(launch.date_utc)}</h5>
        </div>
        <div className='launches-list__item-description'>
          {
            data && (
              <img src={data.flickr_images[0]} width={250}/>
            )
          }
          <p>{launch.details}</p>
        </div>
      </div>
    </li>
  );
}

export default LaunchInfo;
