import { toast } from "react-toastify";

export const notifyLoadArtworksError = (error: Error) => {
  toast.error(`Fallo al cargar las obras: ${error.message}`, {
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
