function Image(props) {
  const { src } = props;

  return (
    <div>
      <img src={src} alt="" width={"200px"} />
    </div>
  );
}

export default Image;
