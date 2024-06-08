import "./IconButton.scss";

type IconButonProps = {
  source: string;
  alternativeText: string;
  action: () => void;
  className: string;
};

const IconButton = ({
  source,
  alternativeText,
  action,
  className,
}: IconButonProps): React.ReactElement => {
  return (
    <button className={`button icon-button ${className}`} onClick={action}>
      <img src={source} alt={alternativeText} width={"56"} height={"56"} />
    </button>
  );
};

export default IconButton;
