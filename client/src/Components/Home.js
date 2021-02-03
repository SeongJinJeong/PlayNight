import React from "react";
import Jumbo from "../ui/Jumbo";
import Contents from "../ui/Contents";

function Home(props) {
  return (
    <>
      <Contents
        elements={
          <>
            <Jumbo path={"./Images/JumboBg.jpg"} content={"Jumbo Contents"} />
            <div style={{ height: "800px", backgroundColor: "black" }}></div>
          </>
        }
      />
    </>
  );
}

export default Home;
