type IconButonProps = {
  source: string;
  alternativeText: string;
  action: () => void;
};

const IconButton = ({
  source,
  alternativeText,
  action,
}: IconButonProps): React.ReactElement => {
  return (
    <button className="button icon-button" onClick={action}>
      <img src={source} alt={alternativeText} />
    </button>
  );
};

export default IconButton;
