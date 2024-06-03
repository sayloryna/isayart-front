import { Artwork } from "../../artworks/types";
import ArtworkCard from "../ArtworksCard/ArtworkCard";

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