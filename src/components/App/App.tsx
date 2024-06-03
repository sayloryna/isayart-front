import MainHeader from "../MainHeader/MainHeader";
import GalleryPage from "../../pages/GalleryPage";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <MainHeader title="IsayArt" />
      <GalleryPage />
    </div>
  );
};

export default App;
