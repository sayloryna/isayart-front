import "./IconButton.scss";

interface IconButtonProps {
  source: string;
  alternativeText: string;
  className?: string;
  action: () => void;
}

const IconButton = ({
  source,
  alternativeText,
  className = "",
  action,
}: IconButtonProps): React.ReactElement => {
  return (
    <button className={`button button--icon ${className}`} onClick={action}>
      <img src={source} alt={alternativeText} width="56" height="56" />
    </button>
  );
};

export default IconButton;
