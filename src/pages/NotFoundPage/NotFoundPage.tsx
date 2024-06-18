import "./NotFoundPage.scss";

const NotFoundPage = (): React.ReactElement => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">
        La página a la que intentas acceder no existe
      </h2>
      <img
        className="not-found__image"
        src="assets/not-found.webp"
        alt="hombre con la boca abierta y espresion de sorpresa"
        width="200"
        height="200"
        loading="lazy"
      />
      <span className="not-found__code">404</span>
    </div>
  );
};

export default NotFoundPage;
