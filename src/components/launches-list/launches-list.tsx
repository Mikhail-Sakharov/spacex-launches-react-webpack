import {useGetLaunchesQuery} from '../../services/launches-api.service';
import {Launch} from '../../types/launch.interface';

function LaunchesList(): JSX.Element {
  const {data = [], error, isLoading} = useGetLaunchesQuery({});

  return (
    <ul>
      {
        data.map((launch: Launch) => (
          <li>
            <h2>{launch.name}</h2>
          </li>
        ))
      }
    </ul>
  );
}

export default LaunchesList;
