import { useNavigate } from "react-router-dom";
import { Artwork } from "../../types";
import IconButton from "../../../components/IconButton/IconButton";
import artworksClient from "../../client/ArtworksClient";
import { useAppDispatch } from "../../../store/hooks";
import {
  loadArtworksActionCreator,
  updateArtworksActionCreator,
} from "../../artworksSlice/artworksSlice";
import routes from "../../../routes/routes";
import "./ArtworkCard.scss";

interface ArtworkCardProps {
  artwork: Artwork;
  deleteAction: (artworkId: string) => Promise<void>;
  toggleFavouriteAction: (artwork: Artwork) => Promise<Artwork>;
}

const ArtworkCard = ({
  artwork,
  deleteAction,
  toggleFavouriteAction,
}: ArtworkCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const artworkId = artwork._id;

  return (
    <article className="artwork">
      <button
        onClick={() => {
          navigate(`${routes.artworks}/${artwork._id}`);
        }}
      >
        <h2 className="artwork__title">
          {`${artwork.title}`} |
          <span className="artwork__author">{` ${artwork.author}`}</span>
        </h2>
      </button>
      <div className="artwork__images">
        <button
          onClick={() => {
            navigate(`/artworks/${artwork._id}`);
            scroll(0, 0);
          }}
        >
          <img
            className="artwork__picture"
            src={artwork.artworkUrl}
            alt={artwork.description}
            width={artwork.size.width.toString()}
            height={artwork.size.height.toString()}
            loading="lazy"
          />
        </button>
        <IconButton
          action={async () => {
            await deleteAction(artworkId);

            const artworks = await artworksClient.getAll();

            const action = loadArtworksActionCreator(artworks);

            dispatch(action);
          }}
          alternativeText="borrar"
          source="assets/icons/delete-bin.svg"
          className="delete-button"
        />
        <IconButton
          action={async () => {
            const updateArtwork = await toggleFavouriteAction(artwork);

            const action = updateArtworksActionCreator(updateArtwork);

            dispatch(action);
          }}
          alternativeText={
            artwork.isFavourite ? "corazon rosa" : "corazon hueco"
          }
          source={
            artwork.isFavourite
              ? "assets/icons/heart-fill.svg"
              : "assets/icons/heart-line.svg"
          }
          className="favourite-button"
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
