import React from "react";
import "./ArtworkForm.scss";

const ArtworkForm = (): React.ReactElement => {
  return (
    <form className="form">
      <div className="form__group">
        <label htmlFor="author">Autor: </label>
        <input className="form__input" id="author" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="title">Título: </label>
        <input required className="form__input" id="title" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="description">Descripción: </label>
        <input required className="form__input" id="description" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="location">Ubicación: </label>
        <input required className="form__input" id="location" type="text" />
      </div>
    </form>
  );
};

export default ArtworkForm;
