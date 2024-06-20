import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { Artwork } from "../../types";
import ArtworkDetail from "../../components/ArtworkDetail/ArtworkDetail";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { hideLoading, showLoading } from "../../../ui/uiSlice/actions";
import { notifyLoadArtworkError } from "../../toasts/loadArtworkToasts/notify";
import loadArtwork from "../../client/actions/loadArtwork";

const artworkInitialState: Artwork = {
  _id: "",
  title: "",
  author: "",
  description: "",
  year: 0,
  artworkUrl: "",
  size: {
    width: 0,
    height: 0,
  },
  isFavourite: false,
  location: "",
  medium: "",
};

const ArtworkDetailPage = (): React.ReactElement => {
  const { artworkId } = useParams();
  const { isLoading } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [artwork, setArtwork] = useState<Artwork>(artworkInitialState);

  useEffect(() => {
    (async () => {
      dispatch(showLoading);

      const artwork = await loadArtwork(artworkId as string);

      if (!artwork) {
        notifyLoadArtworkError(
          new Error("No se encontró la obra seleccionada"),
        );

        dispatch(hideLoading);

        navigate(`/notfound`);

        return;
      }

      setArtwork(artwork);

      dispatch(hideLoading);
    })();
  }, [artworkId, dispatch, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return <ArtworkDetail artwork={artwork} />;
};

export default ArtworkDetailPage;
