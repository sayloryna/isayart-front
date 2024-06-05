import "./EmptyGallery.scss";

const EmptyGallery = (): React.ReactElement => {
  return (
    <div className="empty-gallery">
      <h1 className="empty-gallery__title">No hay obras en la Galería</h1>
      <img
        className="empty-gallery__image"
        src={"assets/empty-list.jpg"}
        alt={"miau"}
        width={"200"}
        height={"200"}
      />
    </div>
  );
};

export default EmptyGallery;
