import { useEffect } from "react";
import { loadArtworksActionCreator } from "../artworks/artworksSlice/artworksSlice";
import ArtworksClient from "../artworks/client/ArtworksClient";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import ArtworksList from "../artworks/components/ArtworksList/ArtworksList";
import EmptyGallery from "../components/EmptyGallery/EmptyGallery";

const GalleryPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const client = new ArtworksClient();
      const artworks = await client.getAll();
      const action = loadArtworksActionCreator(artworks);
      dispatch(action);
    })();
  }, [dispatch]);

  const { artworks } = useAppSelector((state) => state.artworks);

  if (artworks.length === 0) {
    return <EmptyGallery />;
  }

  return <ArtworksList artworks={artworks} />;
};

export default GalleryPage;
