import { Quest } from '../../types/Quest';
import { Loader } from '../Loader';
import { QuestsItem } from '../QuestsListItem';

import './QuestsItemsList.scss';

interface Props {
  listData: Quest[];
  isLoading: boolean;
  isError: boolean;
}

export const QuestsItemsList: React.FC<Props> = ({
  listData,
  isLoading,
  isError,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Something went wrong try later</p>}
      {!isLoading && !isError && (
        <ul className='quests-items'>
          {listData.map((item) => (
            <li
              className='quests-items__item'
              key={item.id}
            >
              <QuestsItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
