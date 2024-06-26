import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewArtworkData } from "../../types";
import routes from "../../../routes/routes";
import "./ArtworkForm.scss";

interface ArtworkFormProps {
  submit: (newArtworkData: NewArtworkData) => Promise<void>;
}

const artworkFormInitialState: NewArtworkData = {
  title: "",
  location: "",
  author: "",
  description: "",
  artworkUrl: "",
  medium: "",
  year: new Date().getFullYear(),
  height: 0,
  width: 0,
};

const ArtworkForm = ({ submit }: ArtworkFormProps): React.ReactElement => {
  const navigate = useNavigate();

  const [newArtworkData, setNewArtworkData] = useState<NewArtworkData>(
    artworkFormInitialState,
  );

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
      onSubmit={async (event) => {
        event.preventDefault();

        await submit(newArtworkData);

        setNewArtworkData(artworkFormInitialState);
        navigate(routes.artworks);
      }}
    >
      <div className="form__group">
        <label htmlFor="title">Título: </label>
        <input
          required
          className="form__input"
          id="title"
          type="text"
          maxLength={50}
          onChange={handleChange}
          value={newArtworkData.title}
        />
      </div>
      <div className="form__group">
        <label htmlFor="author">Autor: </label>
        <input
          className="form__input"
          id="author"
          type="text"
          onChange={handleChange}
          value={newArtworkData.author}
          maxLength={50}
        />
      </div>
      <div className="form__group">
        <label htmlFor="location">Ubicación: </label>
        <input
          required
          className="form__input"
          id="location"
          type="text"
          maxLength={50}
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
              className="form__input form__input--row"
              id="height"
              type="number"
              min={0}
              pattern="\d+"
              onChange={handleChange}
              value={newArtworkData.height}
            />
            <span> cm</span>
          </div>
          <div>
            <input
              required
              className="form__input form__input--row"
              id="width"
              type="number"
              min={0}
              pattern="\d+"
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
          maxLength={50}
          onChange={handleChange}
          value={newArtworkData.medium}
        />
      </div>
      <div className="form__group">
        <label htmlFor="artworkUrl">Url de la Obra: </label>
        <input
          required
          className="form__input form__input--url"
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
          maxLength={300}
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
          pattern="\d+"
          min={1}
          onChange={handleChange}
          value={newArtworkData.year}
        />
      </div>
      <button type="submit" className="button form__button">
        Guardar
      </button>
    </form>
  );
};

export default ArtworkForm;
