import React from "react";
import "./ccdheader.css"

export default function Ccdheader() {
  return (
    <div className="uploadfile">
      <form className="upload-file">
        <div className="upload-element">
          <input className="input-file" type="file" id="myFile" name="filename" />
          <input className="upload-submit" type="submit" />
          <span className="keyyword-span">Keyword</span>
          <input className="keyword-input" type="text" />
        </div>

        <div className="type-of-the-question">
          <button className="type-btn">what is ?</button>
          <button className="type-btn1">how it works?</button>
        </div>
        <button className="upload-btn">Upload</button>
      </form>
    </div>
  );
}
