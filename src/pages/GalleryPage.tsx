import { useEffect } from "react";
import { loadArtworksActionCreator } from "../artworks/artworksSlice/artworksSlice";
import ArtworksClient from "../client/ArtworksClient";
import ArtworksList from "../components/ArtworksList/ArtworksList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

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

  return <ArtworksList artworks={artworks} />;
};

export default GalleryPage;
