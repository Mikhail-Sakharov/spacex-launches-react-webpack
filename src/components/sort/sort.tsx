import {ChangeEvent, useState} from 'react';
import {SortOrder} from '../../types/query-args.interface';

const DisplayedSortOrderMap = {
  [SortOrder.Asc]: 'сначала самые ранние',
  [SortOrder.Desc]: 'сначала самые свежие'
}

interface SortProps {
  setSortOrder: (state: SortOrder) => void;
}

function Sort({setSortOrder}: SortProps) {
  const [sortOrderLabelText, setSortOrderLabelText] = useState('сначала самые свежие');
  const handleSortOrderInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const checked = evt.currentTarget.checked;
    if (checked) {
      setSortOrder(SortOrder.Asc);
      setSortOrderLabelText(DisplayedSortOrderMap[SortOrder.Asc]);
    } else {
      setSortOrder(SortOrder.Desc);
      setSortOrderLabelText(DisplayedSortOrderMap[SortOrder.Desc]);
    }
  };

  return (
    <div>
      <label htmlFor="sort">
        <input
          onChange={handleSortOrderInputChange}
          type="checkbox" name="sort" id="sort"
        />
        <span>
          {
            `${sortOrderLabelText}`
          }
        </span>
      </label>
    </div>
  );
}

export default Sort;
