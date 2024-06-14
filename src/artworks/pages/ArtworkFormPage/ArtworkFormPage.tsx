import React from "react";
import ArtworkForm from "../../components/ArtworkForm/ArtworkForm";
import "./ArtworkFormPage.scss";
import { NewArtworkData } from "../../types";
import artworksClient from "../../client/ArtworksClient";
import { toast } from "react-toastify";
import CreateArtworkSuccess from "./toast/CreateArtworkSuccess";

const notify = (error?: Error) => {
  if (error) {
    toast.error(`${error.message}`, {
      position: "top-right",
      style: { fontWeight: 600, color: "black", fontSize: "1.5rem" },
    });
    return;
  }

  toast(<CreateArtworkSuccess />, {
    position: "top-center",
    style: {
      fontWeight: 600,
      fontSize: "1.5rem",
      width: "fit-content",
    },
    draggable: true,
  });
};

const createArtwork = async (newArtworkData: NewArtworkData): Promise<void> => {
  try {
    await artworksClient.createArtwork(newArtworkData);
    notify();
  } catch (error) {
    notify(error as Error);
  }
};

const ArtworkFormPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="form-title">Añade tu obra a la Galeria</h2>
      <ArtworkForm submit={createArtwork} />
    </>
  );
};

export default ArtworkFormPage;
