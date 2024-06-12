import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import routes from "../routes/routes";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ArtworkFormPage from "../artworks/pages/ArtworkFormPage/ArtworkFormPage";
import GalleryPage from "../artworks/pages/GalleryPage/GalleryPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to={routes.artworks} />} index />
      <Route path={routes.artworks} element={<GalleryPage />} />
      <Route path={routes.create} element={<ArtworkFormPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>,
  ),
);
export default mainRouter;
