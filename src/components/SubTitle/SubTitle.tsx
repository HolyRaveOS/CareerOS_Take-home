import classNames from 'classnames';
import './SubTitle.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SubTitle: React.FC<Props> = ({ children, className }) => {
  return <h3 className={classNames('sub-title', { className })}>{children}</h3>;
};
