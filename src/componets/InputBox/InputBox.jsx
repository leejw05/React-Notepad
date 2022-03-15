import { useState } from "react";
import "./index.css";

function InputBox({ Submit, clear }) {
  const [Title, setTitle] = useState("");

  const [Article, setArticle] = useState("");

  const CallSubmit = () => {
    Submit(Title, Article);
    setArticle("");
  };
  return (
    <div className="Container">
      <div className="InputBox">
        Title :
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="InputBox">
        Text :
        <input
          type="text"
          onChange={(e) => {
            setArticle(e.target.value);
          }}
          value={Article}
          onKeyUp={() => {
            if (window.event.keyCode === 13) {
              CallSubmit();
            }
          }}
        />
      </div>
      <button
        onClick={() => {
          clear();
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default InputBox;
