import React, { useState } from "react";
import { NewArtworkData } from "../../types";
import "./ArtworkForm.scss";

const ArtworkForm = (): React.ReactElement => {
  const [newArtworkData, setNewArtworkData] = useState<NewArtworkData>({
    title: "",
    author: "",
    location: "",
    description: "",
    artworkUrl: "",
    medium: "",
    year: 2024,
    height: 0,
    width: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setNewArtworkData((previousNewArtworkData) => {
      return {
        ...previousNewArtworkData,
        [event.target.id]: event.target.value,
      };
    });
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="form__group">
        <label htmlFor="author">Autor: </label>
        <input
          className="form__input"
          id="author"
          type="text"
          onChange={handleChange}
          value={newArtworkData.author}
        />
      </div>
      <div className="form__group">
        <label htmlFor="title">Título: </label>
        <input
          required
          className="form__input"
          id="title"
          type="text"
          onChange={handleChange}
          value={newArtworkData.title}
        />
      </div>
      <div className="form__group">
        <label htmlFor="location">Ubicación: </label>
        <input
          required
          className="form__input"
          id="location"
          type="text"
          onChange={handleChange}
          value={newArtworkData.location}
        />
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
              onChange={handleChange}
              value={newArtworkData.height}
            />
            <span> cm</span>
          </div>
          <div>
            <input
              required
              className="form__input form__input--size"
              id="width"
              type="number"
              onChange={handleChange}
              value={newArtworkData.width}
            />
            <span> cm</span>
          </div>
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="medium">Técnica: </label>
        <input
          required
          className="form__input"
          id="medium"
          type="text"
          onChange={handleChange}
          value={newArtworkData.medium}
        />
      </div>
      <div className="form__group">
        <label htmlFor="artworkUrl">Url de la Obra: </label>
        <input
          required
          className="form__input"
          id="artworkUrl"
          type="url"
          onChange={handleChange}
          value={newArtworkData.artworkUrl}
        />
      </div>
      <div className="form__group">
        <label htmlFor="description">Descripción: </label>
        <textarea
          required
          className="form__input form__input--textarea"
          id="description"
          onChange={handleChange}
          value={newArtworkData.description}
        />
      </div>
      <div className="form__group">
        <label htmlFor="year">Año de creación:</label>
        <input
          required
          className="form__input"
          id="year"
          type="number"
          onChange={handleChange}
          value={newArtworkData.year}
        />
      </div>
      <button type="submit" className="form__button">
        GUARDAR
      </button>
    </form>
  );
};

export default ArtworkForm;
