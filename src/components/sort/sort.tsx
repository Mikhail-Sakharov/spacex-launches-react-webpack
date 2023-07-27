import {ChangeEvent, useState} from 'react';
import {SortOrder} from '../../types/query-args.interface';

const DisplayedSortOrderMap = {
  [SortOrder.Asc]: <span>&#8679;</span>,
  [SortOrder.Desc]: <span>&#8681;</span>
}

interface SortProps {
  sortTypeLabelText: string;
  setSortOrder: (state: SortOrder) => void;
}

function Sort({sortTypeLabelText, setSortOrder}: SortProps) {
  const [sortOrderLabelText, setSortOrderLabelText] = useState(<span>&#8681;</span>);
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
    <div className='sort'>
      <label htmlFor="sort">
        <input
          onChange={handleSortOrderInputChange}
          type="checkbox" name="sort" id="sort"
        />
        <span>{sortOrderLabelText}</span>
        {' '}
        <span>{sortTypeLabelText}</span>
      </label>
    </div>
  );
}

export default Sort;
