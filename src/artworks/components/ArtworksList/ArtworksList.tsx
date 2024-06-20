import { Artwork } from "../../types";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import toggleArtworkFavouriteAction from "../../client/actions/toggleArtworkFavouriteAction";
import deleteArtworkAction from "../../client/actions/deleteArtworkAction";
import "./ArtworksList.scss";

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
