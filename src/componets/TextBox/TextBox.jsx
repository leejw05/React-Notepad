function TextBox({ Article, Title }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="Title">
        {Title}
      </h1>
      <textarea
        style={{ textAlign: "center" }}
        name=""
        id=""
        cols="30"
        rows="10"
        defaultValue={Article}
      ></textarea>
    </>
  );
}

export default TextBox;
