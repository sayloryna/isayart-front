import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import routes from "../routes/routes";
import Loading from "../components/Loading/Loading";
import {
  GalleryPage,
  ArtworkFormPage,
  NotFoundPage,
  ArtworkDetailPage,
} from "./lazyImports";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Navigate to={routes.artworks} />} index />
      <Route
        path={routes.artworks}
        element={
          <Suspense fallback={<Loading />}>
            <GalleryPage />
          </Suspense>
        }
      />
      <Route
        path={routes.create}
        element={
          <Suspense fallback={<Loading />}>
            <ArtworkFormPage />
          </Suspense>
        }
      />
      <Route
        path={`${routes.artworks}/:artworkId`}
        element={
          <Suspense fallback={<Loading />}>
            <ArtworkDetailPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>,
  ),
);
export default mainRouter;
