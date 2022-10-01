import React from "react";

const App = () => {
  return (
    <div className="app">
      <video loop autoPlay muted id="video">
        <source src={require("./contents/videos/cargoship.mp4")}></source>
      </video>

      <div className="soon-text">
        <h1>Yakında sizlerle</h1>
        <h2>Soon</h2>
        <p>05533229465</p>
      </div>
    </div>
  );
};

export default App;
