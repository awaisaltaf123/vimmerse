import React from "react";

const Intro = ({ init, isReady }) => {
  return (
    <header className={isReady ? "hidden intro" : "intro"}>
      <div className="intro__content">
        <h1>Paint Brush</h1>
        <button onClick={init} className="blob-btn">
          <span className="blob-text">Start painting</span>
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <p>
          Created by <strong>Awais Altaf</strong>
        </p>
        <p>
          Submitted to <strong>Vimmerse</strong>
        </p>
      </div>
    </header>
  );
};

export default Intro;
