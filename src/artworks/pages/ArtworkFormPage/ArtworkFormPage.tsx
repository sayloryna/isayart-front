import React from "react";
import ArtworkForm from "../../components/ArtworkForm/ArtworkForm";
import "./ArtworkFormPage.scss";
import { NewArtworkData } from "../../types";
import artworksClient from "../../client/ArtworksClient";

const ArtworkFormPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="form-title">Añade tu obra a la Galeria</h2>
      <ArtworkForm submit={createArtwork} />
    </>
  );
};

export default ArtworkFormPage;
const createArtwork = (newArtworkData: NewArtworkData): void => {
  artworksClient.createArtwork(newArtworkData);
};
