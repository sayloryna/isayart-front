import "./IconButton.scss";

interface IconButonProps {
  source: string;
  alternativeText: string;
  className: string;
  action: () => void;
}

const IconButton = ({
  source,
  alternativeText,
  className,
  action,
}: IconButonProps): React.ReactElement => {
  return (
    <button className={`button button--icon ${className}`} onClick={action}>
      <img src={source} alt={alternativeText} width="48" height="48" />
    </button>
  );
};

export default IconButton;
