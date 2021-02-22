import React, { useEffect, useState } from "react";

function Contents({ elements }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    return document.getElementsByClassName("Header")[0].offsetHeight !== null
      ? setLoading(false)
      : null;
  }, []);
  return loading ? (
    <p>Loading</p>
  ) : (
    <div
      style={{
        marginTop:
          document.getElementsByClassName("Header")[0].offsetHeight - 1,
        minHeight:
          window.innerHeight -
          document.getElementsByClassName("Header")[0].offsetHeight,
        height: "100%",
      }}>
      {elements}
    </div>
  );
}

export default Contents;
