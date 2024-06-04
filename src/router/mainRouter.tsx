import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import GalleryPage from "../pages/GalleryPage";
import routes from "../routes/routes";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to={routes.gallery} />} index />
      <Route path={routes.gallery} element={<GalleryPage />} />
    </Route>,
  ),
);
export default mainRouter;
