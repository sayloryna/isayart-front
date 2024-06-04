import "./IconButton.scss";

type IconButonProps = {
  source: string;
  alternativeText: string;
  action: () => void;
  width: string;
  height: string;
  className: string;
};

const IconButton = ({
  source,
  alternativeText,
  action,
  width,
  height,
  className,
}: IconButonProps): React.ReactElement => {
  return (
    <button className={`button icon-button ${className}`} onClick={action}>
      <img src={source} alt={alternativeText} width={width} height={height} />
    </button>
  );
};

export default IconButton;
