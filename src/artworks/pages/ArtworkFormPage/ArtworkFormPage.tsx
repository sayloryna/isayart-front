import React from "react";
import ArtworkForm from "../../components/ArtworkForm/ArtworkForm";
import { NewArtworkData } from "../../types";
import artworksClient from "../../client/ArtworksClient";
import {
  notifyCreateArtworkError,
  notify,
} from "../../toasts/createArtworkToasts/notify";
import "./ArtworkFormPage.scss";

const createArtwork = async (newArtworkData: NewArtworkData): Promise<void> => {
  try {
    await artworksClient.createArtwork(newArtworkData);
    notify();
  } catch (error) {
    notifyCreateArtworkError(error as Error);
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
