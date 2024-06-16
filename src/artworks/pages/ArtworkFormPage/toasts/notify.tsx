import { toast } from "react-toastify";
import CreateArtworkSuccess from "./CreateArtworkSuccess";

export const notifyError = (error: Error) => {
  toast.error(`Failed to create artwork ${error.message}`, {
    position: "top-right",
    style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
  });
};
export const notify = () => {
  toast(<CreateArtworkSuccess />, {
    position: "top-center",
    style: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    draggable: true,
  });
};
