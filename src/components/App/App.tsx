import { useEffect } from "react";
import ArtworksClient from "../../client/ArtworksClient";
import { useAppDispatch } from "../../redux/hooks";
import { loadArtworksActionCreator } from "../../redux/artworksSlice/artworksSlice";
import ArtworkCard from "../ArtworksCard/ArtworkCard";
import { mockMonaLisa, mockVitruvis } from "../../mocks/artworks";
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

  return (
    <div className="app">
      <h1>IsayArt</h1>
      <ArtworkCard artwork={mockMonaLisa} />
      <ArtworkCard artwork={mockVitruvis} />
    </div>
  );
};

export default App;
