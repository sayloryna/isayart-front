import { useNavigate } from "react-router-dom";
import { Artwork, ArtworkUpdate } from "../../types";
import IconButton from "../../../components/IconButton/IconButton";
import { notify, notifyError } from "./toast/notify";
import artworksClient from "../../client/ArtworksClient";
import { useAppDispatch } from "../../../store/hooks";
import { loadArtworksActionCreator } from "../../artworksSlice/artworksSlice";
import routes from "../../../routes/routes";
import "./ArtworkCard.scss";

interface ArtworkCardProps {
  artwork: Artwork;
}
const deleteArtwork = async (artworkId: string): Promise<void> => {
  try {
    await artworksClient.deleteArtworkById(artworkId);
    notify();
  } catch (error) {
    notifyError(error as Error);
  }
};

const toggleFavourite = async (artwork: Artwork): Promise<void> => {
  const updateData: ArtworkUpdate = {
    _id: artwork._id,
    update: { isFavourite: !artwork.isFavourite },
  };
  try {
    await artworksClient.updateArtwork(updateData);
  } catch (error) {
    notifyError(error as Error);
  }
};

const ArtworkCard = ({ artwork }: ArtworkCardProps): React.ReactElement => {
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
            width="200"
            height="200"
            loading="lazy"
          />
        </button>
        <IconButton
          action={async () => {
            await deleteArtwork(artworkId);

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
            await toggleFavourite(artwork);
            const artworks = await artworksClient.getAll();

            const action = loadArtworksActionCreator(artworks);

            dispatch(action);
          }}
          alternativeText="añadir a favoritos"
          source={
            artwork.isFavourite
              ? "assets/icons/heart-fill.svg"
              : "assets/icons/heart-line.svg"
          }
          className={`favorite-button ${artwork.title}`}
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
