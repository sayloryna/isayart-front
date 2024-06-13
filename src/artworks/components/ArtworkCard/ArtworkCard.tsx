import { Artwork } from "../../types";
import IconButton from "../../../components/IconButton/IconButton";
import "./ArtworkCard.scss";

interface ArtworkCardProps {
  artwork: Artwork;
}
const ArtworkCard = ({ artwork }: ArtworkCardProps): React.ReactElement => {
  return (
    <article className="artwork">
      <h2 className="artwork__title">
        {`${artwork.title}`} |
        <span className="artwork__author">{` ${artwork.author}`}</span>
      </h2>
      <div className="artwork__images">
        <img
          className="artwork__picture"
          src={artwork.artworkUrl}
          alt={artwork.description}
          width="200"
          height="200"
        />
        <IconButton
          action={() => {}}
          alternativeText="borrar"
          source="assets/icons/delete-bin.svg"
          className="delete-button"
        />
        <IconButton
          action={() => {}}
          alternativeText="añadir a favoritos"
          source={
            artwork.isFavourite
              ? "assets/icons/heart-fill.svg"
              : "assets/icons/heart-line.svg"
          }
          className="favorite-button"
        />
      </div>
      <div className="artwork__bottom">
        <span className="artwork__location">{`${artwork.location} `}</span>
        <span className="artwork__date">{`${artwork.year}`}</span>
      </div>
    </article>
  );
};

export default ArtworkCard;
