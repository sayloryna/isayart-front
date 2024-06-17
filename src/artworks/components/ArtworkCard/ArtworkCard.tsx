import { Artwork } from "../../types";
import IconButton from "../../../components/IconButton/IconButton";
import artworksClient from "../../client/ArtworksClient";
import { useAppDispatch } from "../../../store/hooks";
import { loadArtworksActionCreator } from "../../artworksSlice/artworksSlice";
import { notify, notifyError } from "./toast/notify";
import "./ArtworkCard.scss";
import { useNavigate } from "react-router-dom";

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

const ArtworkCard = ({ artwork }: ArtworkCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <article className="artwork">
      <button
        onClick={() => {
          navigate(`/artworks/${artwork._id}`);
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
            await deleteArtwork(artwork._id);

            const artworks = await artworksClient.getAll();

            const action = loadArtworksActionCreator(artworks);

            dispatch(action);
          }}
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
