import {useEffect, useState} from 'react';
import {useGetFilteredLaunchesMutation} from '../../services/launches-api.service';
import {Launch} from '../../types/launch.interface';
import {SortOrder} from '../../types/query-args.interface';
import {INITIAL_LIMIT_VALUE} from '../../const';
import LaunchInfo from '../launch-info/launch-info';
import Sort from '../sort/sort';

function LaunchesList(): JSX.Element {
  // фильтры
  const [queryStartDate, setQueryStartDate] = useState('2015-01-01T00:00:00.000Z');
  const [queryEndDate, setQueryEndDate] = useState('2020-01-01T00:00:00.000Z');
  const [querySortOrder, setQuerySortOrder] = useState<SortOrder>(SortOrder.Desc);
  const [queryLimit, setQueryLimit] = useState(INITIAL_LIMIT_VALUE);

  // загрузка данных
  const [data, setData] = useState<Launch[]>([]);
  const [triggerGettingLaunches] = useGetFilteredLaunchesMutation();

  const fetchFilteredLaunches = async () => {
    const launchesData = await triggerGettingLaunches({
      query: {
        date_utc: {
          $gte: queryStartDate,
          $lte: queryEndDate
        }
      },
      options: {
        sort: {
          date_utc: querySortOrder
        },
        limit: queryLimit
      }
    }).unwrap().then((result) => result.docs);
    setData(launchesData);
  };

  const onComponentRenderFetchData = () => {
    fetchFilteredLaunches();
  };

  useEffect(() => {
    onComponentRenderFetchData();
  }, [querySortOrder])

  return (
    <>
      <Sort setSortOrder={setQuerySortOrder}/>
      <ul>
        {
          data.map((launch: Launch) => (
            <LaunchInfo key={launch.id} launch={launch}/>
          ))
        }
      </ul>
    </>
  );
}

export default LaunchesList;
