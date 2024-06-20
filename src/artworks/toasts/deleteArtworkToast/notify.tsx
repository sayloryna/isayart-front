import { toast } from "react-toastify";
import DeleteArtworkSuccess from "./DeleteArtworkSuccess";

export const notifyDeleteArtworkError = (error: Error) => {
  toast.error(`Fallo al borrar la obra: ${error.message}`, {
    position: "top-right",
    style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
  });
};

export const notifyDeleteArtworkSuccess = () => {
  toast(<DeleteArtworkSuccess />, {
    position: "top-center",
    style: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    draggable: true,
  });
};
