import React from "react";

function Jumbo(props) {
  return (
    <div style={JumboStyle(props)}>
      <JumboContents content={props.content} />
    </div>
  );
}

function JumboContents(props) {
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}>
      <p>
        <h1 style={{ fontSize: "80px" }}>Jumbo Title</h1>
      </p>
      <p>{props.content || "Jumbo Comments"}</p>
    </div>
  );
}

const JumboStyle = (props) => {
  return {
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
  };
};

export default Jumbo;
