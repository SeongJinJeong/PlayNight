import React from "react";

function Contents(props) {
  console.log(document.getElementsByClassName("Header")[0].offsetHeight);
  return (
    <div
      style={{
        marginTop: document.getElementsByClassName("Header")[0].offsetHeight,
      }}
    >
      Hello
    </div>
  );
}

export default Contents;
