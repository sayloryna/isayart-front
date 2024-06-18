import React from "react";
import { Artwork } from "../../types";
import "./ArtworkDetail.scss";

interface ArtworkDetailProps {
  artwork: Artwork;
}

const ArtworkDetail = ({ artwork }: ArtworkDetailProps): React.ReactElement => {
  return (
    <article className="artwork-detail">
      <h2 className="artwork-detail__title">{artwork.title}</h2>
      <img
        className="artwork-detail__image"
        loading="lazy"
        src={artwork.artworkUrl}
        alt={artwork.description}
        width={artwork.size.width.toString()}
        height={artwork.size.height.toString()}
      />
      <p className="artwork-detail__authorship">{`${artwork.author}, ${artwork.year}`}</p>
      <div className="artwork-detail__info">
        <h3 className="artwork-detail__sub-title">Acerca de la Obra</h3>
        <div className="artwork-detail__data">
          <span className="data-label">Autor:</span>
          <p className="data">{artwork.author}</p>
        </div>
        <div className="artwork-detail__data">
          <span className="data-label">Técnica:</span>
          <p className="data">{artwork.medium}</p>
        </div>
        <div className="artwork-detail__data">
          <span className="data-label">Dimensiones:</span>
          <p className="data">{`${artwork.size.height} x ${artwork.size.width} cm`}</p>
        </div>
        <div className="artwork-detail__data">
          <span className="data-label">Ubicación:</span>
          <p className="data">{artwork.location}</p>
        </div>
        <div className="artwork-detail__data">
          <span className="data-label">Descripción:</span>
          <p className="data">{artwork.description}.</p>
        </div>
      </div>
    </article>
  );
};

export default ArtworkDetail;
