import classNames from 'classnames';
import './Loader.scss';

interface Props {
  className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => (
  <div className={classNames('loader', className)}>
    <div className={'loader__content'} />
  </div>
);
