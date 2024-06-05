import { Artwork } from "../../types";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import "./ArtworksList.scss";

interface ArtworkListProps {
  artworks: Artwork[];
}

const ArtworkList = ({ artworks }: ArtworkListProps): React.ReactElement => {
  return (
    <ul className="artworks">
      {artworks.map((artwork) => (
        <li key={artwork._id}>
          <ArtworkCard artwork={artwork} />
        </li>
      ))}
    </ul>
  );
};

export default ArtworkList;
