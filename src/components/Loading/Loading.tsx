import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container">
        <img
          className="loading__image"
          src="assets/loading.png"
          alt="dibujo de artista con bigote bufanda y boina"
          width="100"
          height="100"
        />
        <span className="loading__text">Cargando...</span>
      </div>
    </div>
  );
};

export default Loading;
