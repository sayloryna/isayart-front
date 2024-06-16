import { toast } from "react-toastify";
import DeleteArtworkSuccess from "./DeleteArtworkSuccess";

export const notifyError = (error: Error) => {
  toast.error(`Failed to delete artwork: ${error.message}`, {
    position: "top-right",
    style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
  });
};

export const notify = () => {
  toast(<DeleteArtworkSuccess />, {
    position: "top-center",
    style: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    draggable: true,
  });
};
