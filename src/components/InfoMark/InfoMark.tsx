import './InfoMark.scss';

interface Props {
  children: React.ReactNode;
}

export const InfoMark: React.FC<Props> = ({ children }) => {
  return (
    <div className='info-mark'>
      <img
        className='info-mark__icon'
        src='icons/info-vector.svg'
        alt='info-icon'
      />
      <span className='info-mark__text'>{children}</span>
    </div>
  );
};
