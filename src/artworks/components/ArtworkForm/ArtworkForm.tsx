import React from "react";
import "./ArtworkForm.scss";

const ArtworkForm = (): React.ReactElement => {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="form__group">
        <label htmlFor="author">Autor: </label>
        <input className="form__input" id="author" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="title">Título: </label>
        <input required className="form__input" id="title" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="location">Ubicación: </label>
        <input required className="form__input" id="location" type="text" />
      </div>
      <span>Dimensiones:</span>
      <div className="size">
        <div className="size__labels">
          <label htmlFor="height">Alto: </label>
          <label htmlFor="width">Ancho: </label>
        </div>
        <div className="size__inputs">
          <div>
            <input
              required
              className="form__input form__input--size"
              id="height"
              type="number"
            />
            <span> cm</span>
          </div>
          <div>
            <input
              required
              className="form__input form__input--size"
              id="width"
              type="number"
            />
            <span> cm</span>
          </div>
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="medium">Técnica: </label>
        <input required className="form__input" id="medium" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="rtworkUrl">Url de la Obra: </label>
        <input required className="form__input" id="rtworkUrl" type="url" />
      </div>
      <div className="form__group">
        <label htmlFor="description">Descripción: </label>
        <textarea
          required
          className="form__input form__input--textarea"
          id="description"
        />
      </div>
      <div className="form__group">
        <label htmlFor="year">Año de creación:</label>
        <input required className="form__input" id="year" type="number" />
      </div>
      <button type="submit" className="form__button">
        GUARDAR
      </button>
    </form>
  );
};

export default ArtworkForm;
