import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";

function Header() {
  return (
    <Box
      width={1}
      display="flex"
      justifyContent="center"
      style={{ borderBottom: "1px solid black" }}>
      <HeaderContainer />
    </Box>
  );
}

function HeaderContainer(props) {
  return (
    <Box width={9.5 / 10} display="flex" justifyContent="space-between">
      <Title></Title>
      <Menu />
    </Box>
  );
}

function Title(props) {
  return (
    <>
      <Box style={{}} display={boxShownBySize(["xs"])}>
        <h1>PLAYNIGHT</h1> {/*추후 이미지 ( <img /> ) 로 변경 필요*/}
      </Box>
      <Box style={{}} display={boxShownBySize(["sm"])}>
        <h1>PLAYNIGHT with sm</h1> {/*추후 이미지 ( <img /> ) 로 변경 필요*/}
      </Box>
      <Box style={{}} display={boxShownBySize(["md"])}>
        <h1>PLAYNIGHT with md</h1> {/*추후 이미지 ( <img /> ) 로 변경 필요*/}
      </Box>
      <Box style={{}} display={boxShownBySize(["lg"])}>
        <h1>PLAYNIGHT with lg</h1> {/*추후 이미지 ( <img /> ) 로 변경 필요*/}
      </Box>
      <Box style={{}} display={boxShownBySize(["xl"])}>
        <h1>PLAYNIGHT with xl</h1> {/*추후 이미지 ( <img /> ) 로 변경 필요*/}
      </Box>
    </>
  );
}

function Menu(props) {
  return (
    <>
      <Box alignItems="center" display="flex">
        Menu
      </Box>
    </>
  );
}

// 배열을 받아 배열 안의 사이즈들은 block 이 외는 none
function boxShownBySize(sizeArray) {
  return {
    xs: () => {
      return sizeArray.includes("xs") ? "block" : "none";
    },
    sm: () => {
      return sizeArray.includes("sm") ? "block" : "none";
    },
    md: () => {
      return sizeArray.includes("md") ? "block" : "none";
    },
    lg: () => {
      return sizeArray.includes("lg") ? "block" : "none";
    },
    xl: () => {
      return sizeArray.includes("xl") ? "block" : "none";
    },
  };
}

export default Header;
