import React from "react";

function Jumbo(props) {
  return (
    <div
      style={{
        height: "40rem",
        width: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: props.path ? `url(${props.path})` : null,
        backgroundColor: props.path ? null : "yellow",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // boxSizing: "inherit",
      }}
    >
      <JumboContents />
    </div>
  );
}

function JumboContents(props) {
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}
    >
      <p>
        <h1 style={{ fontSize: "80px" }}>Jumbo Title</h1>
      </p>
      <p>{props.content || "Jumbo Comments"}</p>
    </div>
  );
}

export default Jumbo;
