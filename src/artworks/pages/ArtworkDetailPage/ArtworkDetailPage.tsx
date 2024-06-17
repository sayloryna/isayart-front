import React, { useEffect, useState } from "react";
import { notifyError } from "../ArtworkFormPage/toasts/notify";
import artworksClient from "../../client/ArtworksClient";
import { Artwork } from "../../types";
import { useParams } from "react-router-dom";
import ArtworkDetail from "../../components/ArtworkDetail/ArtworkDetail";

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

  const [artwork, setArtwork] = useState<Artwork>(artworkInitialState);

  useEffect(() => {
    (async () => {
      const artwork = await loadArtwork(artworkId as string);
      if (!artwork) {
        notifyError(new Error("No se encontro obra"));
        return;
      }

      setArtwork(artwork);
    })();
  }, [artworkId]);
  return <ArtworkDetail artwork={artwork} />;
};

export default ArtworkDetailPage;
