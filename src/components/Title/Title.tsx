import classNames from 'classnames';
import { InfoMark } from '../InfoMark';
import './Title.scss';
interface Props {
  children: React.ReactNode;
  infoMarkText?: string;
  className?: string;
  containerClassName?: string;
}

export const Title: React.FC<Props> = ({
  children,
  infoMarkText,
  className,
  containerClassName,
}) => {
  return (
    <>
      {infoMarkText ? (
        <div className={classNames('title-container', containerClassName)}>
          <h2 className={classNames('title', className)}>{children}</h2>
          {infoMarkText && <InfoMark>{infoMarkText}</InfoMark>}
        </div>
      ) : (
        <>
          <h2 className={classNames('title', className)}>{children}</h2>
        </>
      )}
    </>
  );
};
