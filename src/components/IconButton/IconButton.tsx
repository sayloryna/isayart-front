import "./IconButton.scss";

interface IconButtonProps {
  source: string;
  alternativeText: string;
  className?: string;
  ariaLabel: string;
  action: () => void;
}

const IconButton = ({
  source,
  alternativeText,
  className = "",
  ariaLabel,
  action,
}: IconButtonProps): React.ReactElement => {
  return (
    <button
      aria-label={ariaLabel}
      className={`button button--icon ${className}`}
      onClick={action}
    >
      <img src={source} alt={alternativeText} width="48" height="48" />
    </button>
  );
};

export default IconButton;
