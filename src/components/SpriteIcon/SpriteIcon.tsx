import classNames from 'classnames';

interface Props {
  iconName: string;
  className?: string;
  width: number;
  height: number;
}

export const SpriteIcon: React.FC<Props> = ({
  iconName,
  className,
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={classNames(className)}
    >
      <use href={`icons/symbol-defs.svg#${iconName}`} />
    </svg>
  );
};
