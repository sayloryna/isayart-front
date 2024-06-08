import { useEffect } from "react";
import { loadArtworksActionCreator } from "../../artworks/artworksSlice/artworksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import EmptyGallery from "../../components/EmptyGallery/EmptyGallery";
import artworksClient from "../../artworks/client/ArtworksClient";
import {
  showLoadingActionCreator,
  hideLoadingActionCreator,
} from "../../ui/uiSlice/uiSlice";
import Loading from "../../components/Loading/Loading";
import ArtworkList from "../../artworks/components/ArtworksList/ArtworksList";
import { toast } from "react-toastify";

const showLoading = showLoadingActionCreator();
const hideLoading = hideLoadingActionCreator();

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
    });
  };

  useEffect(() => {
    dispatch(showLoading);

    (async () => {
      try {
        const artworks = await artworksClient.getAll();
        const action = loadArtworksActionCreator(artworks);
        dispatch(action);

        dispatch(hideLoading);
      } catch (error) {
        notify(error as Error);
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
