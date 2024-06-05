const EmptyGallery = (): React.ReactElement => {
  return (
    <>
      <h1 className="main-title">No hay obras en la Galería</h1>
      <img
        src="/assets/empty-list.jpg"
        alt=" Pintura de una Señora de epoca clásica tapandose la cara avergonzada "
      />
    </>
  );
};

export default EmptyGallery;
