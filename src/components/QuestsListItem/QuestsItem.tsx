import { Quest } from '../../types/Quest';
import { SpriteIcon } from '../SpriteIcon';
import { SubTitle } from '../SubTitle';
import './QuestsItem.scss';

interface Props {
  item: Quest;
}

export const QuestsItem: React.FC<Props> = ({ item }) => {
  const { type, company } = item;
  const { name, logo_url, description } = company;

  return (
    <div className='quests-item'>
      <div className='quests-item__wrapper'>
        <img
          className='quests-item__logo-img'
          src={logo_url}
          alt={name}
        />

        <div className='quests-item__info'>
          <SubTitle>{name}</SubTitle>
          <p className='quests-item__text'>{description}</p>
        </div>
        {type === 'add_contact' ? (
          <a
            className='quests-item__link'
            href='#'
          >
            <SpriteIcon
              iconName='icon-arrow-link'
              className='quests-item__icon'
              width={28}
              height={28}
            />
          </a>
        ) : (
          <button className='quests-item__install-button'>
            install{' '}
            <SpriteIcon
              className='quests-item__install-button-icon'
              width={16}
              height={16}
              iconName='icon-box-arrow-up-right'
            />
          </button>
        )}
      </div>
    </div>
  );
};
