import { useEffect } from "react";
import ArtworksClient from "../../client/ArtworksClient";
import { useAppDispatch } from "../../redux/hooks";
import { loadArtworksActionCreator } from "../../redux/artworksSlice/artworksSlice";

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
    <div>
      <h1>IsayArt</h1>
    </div>
  );
};

export default App;
