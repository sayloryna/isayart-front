import { Artwork } from "../../types";
import deleteArtworkAction from "./actions/deleteArtworkAction";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import "./ArtworksList.scss";
import toggleArtworkFavouriteAction from "./actions/toggleArtworkFavouriteAction";

interface ArtworkListProps {
  artworks: Artwork[];
}

const ArtworkList = ({ artworks }: ArtworkListProps): React.ReactElement => {
  return (
    <ul className="artworks">
      {artworks.map((artwork) => (
        <li key={artwork._id}>
          <ArtworkCard
            artwork={artwork}
            deleteAction={deleteArtworkAction}
            toggleFavouriteAction={toggleArtworkFavouriteAction}
          />
        </li>
      ))}
    </ul>
  );
};

export default ArtworkList;
