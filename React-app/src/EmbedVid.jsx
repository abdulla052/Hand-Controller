// eslint-disable-next-line react/prop-types
const EmbedVid = ({src}) => {
  const style = {
    width: "100%",
    height: "30vw",
    borderRadius: "5px",
  };

  return (
    <>
      <iframe
        style={style}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default EmbedVid;
