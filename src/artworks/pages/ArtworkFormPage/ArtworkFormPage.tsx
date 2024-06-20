import React from "react";
import ArtworkForm from "../../components/ArtworkForm/ArtworkForm";
import createArtwork from "../../client/actions/createArtwork";
import "./ArtworkFormPage.scss";

const ArtworkFormPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="form-title">Añade tu obra a la Galeria</h2>
      <ArtworkForm submit={createArtwork} />
    </>
  );
};

export default ArtworkFormPage;
