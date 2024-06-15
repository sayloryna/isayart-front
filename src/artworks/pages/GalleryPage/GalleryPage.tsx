import { useEffect } from "react";
import { toast } from "react-toastify";
import EmptyGallery from "../../../components/EmptyGallery/EmptyGallery";
import Loading from "../../../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loadArtworksActionCreator } from "../../artworksSlice/artworksSlice";
import artworksClient from "../../client/ArtworksClient";
import ArtworkList from "../../components/ArtworksList/ArtworksList";
import { showLoading, hideLoading } from "../../../ui/uiSlice/actions";

const GalleryPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { artworks } = useAppSelector((state) => state.artworks);
  const { isLoading } = useAppSelector((state) => state.ui);

  const notify = (error: Error) => {
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
    });
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(showLoading);

        const artworks = await artworksClient.getAll();
        const action = loadArtworksActionCreator(artworks);
        dispatch(action);

        dispatch(hideLoading);
      } catch (error) {
        notify(error as Error);

        dispatch(hideLoading);

        return <EmptyGallery />;
      }
    })();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (artworks.length === 0) {
    return <EmptyGallery />;
  }

  return <ArtworkList artworks={artworks} />;
};

export default GalleryPage;
