import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import routes from "../routes/routes";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to={routes.artworks} />} index />
      <Route path={routes.artworks} element={<GalleryPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>,
  ),
);
export default mainRouter;
