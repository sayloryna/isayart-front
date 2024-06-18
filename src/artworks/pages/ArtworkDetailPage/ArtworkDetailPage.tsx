import React, { useEffect, useState } from "react";
import { notifyError } from "../ArtworkFormPage/toasts/notify";
import artworksClient from "../../client/ArtworksClient";
import { Artwork } from "../../types";
import { useParams } from "react-router-dom";
import ArtworkDetail from "../../components/ArtworkDetail/ArtworkDetail";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { hideLoading, showLoading } from "../../../ui/uiSlice/actions";
import Loading from "../../../components/Loading/Loading";

const loadArtwork = async (artworkId: string): Promise<Artwork | void> => {
  try {
    return await artworksClient.getArtworkById(artworkId);
  } catch (error) {
    notifyError(error as Error);
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
  const { artworkId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.ui);
  const [artwork, setArtwork] = useState<Artwork>(artworkInitialState);

  useEffect(() => {
    (async () => {
      dispatch(showLoading);

      const artwork = await loadArtwork(artworkId as string);

      if (!artwork) {
        notifyError(new Error("No se encontro la obra"));
        return;
      }

      setArtwork(artwork);

      dispatch(hideLoading);
    })();
  }, [artworkId, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return <ArtworkDetail artwork={artwork} />;
};

export default ArtworkDetailPage;
