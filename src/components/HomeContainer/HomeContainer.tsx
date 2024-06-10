import './HomeContainer.scss';

interface Props {
  children: React.ReactNode;
}

export const HomeContainer: React.FC<Props> = ({ children }) => {
  return <div className='home-container'>{children}</div>;
};
