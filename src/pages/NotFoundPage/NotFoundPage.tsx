import "./EmptyGallery.scss";

const EmptyGallery = (): React.ReactElement => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">
        La página a la que intentas acceder no existe
      </h1>
      <img
        className="not-found__image"
        src={"assets/not-found.png"}
        alt={"hombre con la boca abierta y espresion de sorpresa"}
        width={"200"}
        height={"200"}
      />
    </div>
  );
};

export default EmptyGallery;
