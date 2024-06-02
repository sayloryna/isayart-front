import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ArtworksClient from "../../client/ArtworksClient";
import { loadArtworksActionCreator } from "../../artworks/artworksSlice/artworksSlice";
import ArtworksList from "../ArtworksList/ArtworksList";
import "./App.scss";

const App = () => {
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

  return (
    <div className="app">
      <h1>IsayArt</h1>
      <ArtworksList artworks={artworks} />
    </div>
  );
};

export default App;
