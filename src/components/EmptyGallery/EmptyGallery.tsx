import "./EmptyGallery.scss";

const EmptyGallery = (): React.ReactElement => {
  return (
    <div className="empty-gallery">
      <h2 className="empty-gallery__title">No hay obras en la Galería</h2>
      <img
        className="empty-gallery__image"
        src={"assets/empty-list.webp"}
        alt={
          "retrato de Madame François Buron leyendo un libro con expresion excandalizada"
        }
        width={"200"}
        height={"200"}
      />
    </div>
  );
};

export default EmptyGallery;
