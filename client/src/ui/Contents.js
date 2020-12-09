import React, { useEffect, useState } from "react";
import Jumbo from "../Components/Jumbo";

function Contents(props) {
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
        marginTop: document.getElementsByClassName("Header")[0].offsetHeight,
      }}
    >
      <Jumbo path={"./Images/JumboBg.jpg"} />
    </div>
  );
}

export default Contents;
