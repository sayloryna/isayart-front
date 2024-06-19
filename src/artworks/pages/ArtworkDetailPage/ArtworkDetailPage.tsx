import React, { useEffect, useState } from "react";
import { notifyCreateArtworkError } from "../../toasts/createArtworkToasts/notify";
import artworksClient from "../../client/ArtworksClient";
import { Artwork } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import ArtworkDetail from "../../components/ArtworkDetail/ArtworkDetail";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { hideLoading, showLoading } from "../../../ui/uiSlice/actions";
import Loading from "../../../components/Loading/Loading";
import { notifyLoadArtworkError } from "../../toasts/loadArtworkToasts/notify";

const loadArtwork = async (artworkId: string): Promise<Artwork | void> => {
  try {
    return await artworksClient.getArtworkById(artworkId);
  } catch (error) {
    notifyCreateArtworkError(error as Error);
  }
};
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
  const navigate = useNavigate();
  const { artworkId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.ui);
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
