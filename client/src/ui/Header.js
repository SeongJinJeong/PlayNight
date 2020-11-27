import React, { useState, useEffect } from "react";

import {
  Box,
  IconButton,
  TextField,
  Badge,
  Avatar,
  Menu as DropDown,
  MenuItem as DropDownItem,
} from "@material-ui/core";

// Drawer Import
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

// 아이콘 Import
import { IconContext } from "react-icons";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

// Web 컴포넌트 Import
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <Box
      width={1}
      display="flex"
      justifyContent="center"
      style={{ borderBottom: "1px solid black", padding: "0.2rem 0em", top: 0 }}
      position="fixed"
      margin="0px auto">
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
      <Box alignItems="center" display="flex" marginLeft="auto">
        {/* 모바일 메뉴 */}
        <Box display={boxShownBySize(["xs", "sm"])}>
          <MobileMenu />
        </Box>

        {/* 웹 메뉴 */}
        <Box display={boxShownBySize(["md", "lg", "xl"])}>
          <WebMenu />
        </Box>
      </Box>
    </>
  );
}

function MobileMenu(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawerClose() {
    setIsOpen(false);
  }

  function toggleDrawerOpen() {
    setIsOpen(true);
  }

  // Return All Drawer List
  function drawerList() {
    // Return List Items
    function ListItemObject(props) {
      return (
        <Box onClick={toggleDrawerClose}>
          <ListItem button>
            {props.listIcon ? (
              <ListItemIcon>{props.listIcon}</ListItemIcon>
            ) : null}
            {props.listText ? <ListItemText primary={props.listText} /> : null}
          </ListItem>
        </Box>
      );
    }

    //Return List by login status
    function DrawerByLogin() {
      return isLogin ? (
        <Box>
          <List>
            <ListItemObject
              listIcon={<Avatar variant="rounded">J</Avatar>}
              listText="프로필"
            />
            <ListItemObject
              listIcon={<BiLogOutCircle />}
              listText={"로그아웃"}
              isBottom={true}
            />
          </List>
        </Box>
      ) : (
        <Box>
          <List>
            <ListItemObject
              listIcon={<Avatar variant="rounded">J</Avatar>}
              listText="프로필"
            />
            <ListItemObject
              listIcon={<BiLogInCircle />}
              listText={"로그인/가입"}
              isBottom={true}
            />
          </List>
        </Box>
      );
    }

    return (
      <>
        <DrawerByLogin />
      </>
    );
  }

  return (
    <>
      {/* 아이콘 랜더링 */}
      <Box>
        <IconContext.Provider value={{ color: "black", size: "2.5em" }}>
          <Box
            onClick={() => {
              toggleDrawerOpen();
            }}>
            <AiOutlineMenuFold />
          </Box>
        </IconContext.Provider>
      </Box>

      {/* Drawer 랜더링 */}
      <Box>
        <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawerClose}>
          {drawerList()}
        </Drawer>
      </Box>
    </>
  );
}

function WebMenu(props) {
  // 추후 로그인 여부 확인한 다음 isLogin 로직 수정 필요
  const [isLogin, setIsLogin] = useState(true);
  function SearchBox(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
      setText(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      if (text.length > 0) {
        alert("You Searched " + text + "!");
        setText("");
      }
    }
    return (
      <Box display="flex" alignItems="center">
        <form>
        <TextField
          type="text"
          value={text}
          onChange={handleChange}
          label="검색"
          variant="standard"
          size="small"
        />
        <IconButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={text.length > 0 ? false : true}
          type="submit">
          <SearchIcon />
        </IconButton>
        </form>
      </Box>
    );
  }

  function NotiIcon(noti) {
    const [isOver, setIsOver] = useState(false);
    switch (noti) {
      case true:
        return (
          <Box
            onMouseEnter={(event) => {
              setIsOver(true);
            }}
            onMouseLeave={(event) => {
              setIsOver(false);
            }}
            onMouseOver={(event) => {
              event.target.style.cursor = "pointer";
            }}>
            {isOver ? (
              <Badge color="secondary" variant="dot">
                <NotificationsActiveIcon fontSize="large" />
              </Badge>
            ) : (
              <Badge color="secondary" variant="dot">
                <NotificationsNoneIcon fontSize="large" />
              </Badge>
            )}
          </Box>
        );
      case false:
        return (
          <Box
            onMouseEnter={(event) => {
              setIsOver(true);
            }}
            onMouseLeave={(event) => {
              setIsOver(false);
            }}
            onMouseOver={(event) => {
              event.target.style.cursor = "pointer";
            }}>
            {isOver ? (
              <NotificationsActiveIcon fontSize="large" />
            ) : (
              <NotificationsNoneIcon fontSize="large" />
            )}
          </Box>
        );
      default:
        break;
    }
  }

  function Profile(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
    function handleClose() {
      setAnchorEl(null);
    }
    function handleDropDownClick() {
      alert("You Clicked Drop Down Item!");
      setAnchorEl(null);
    }
    return (
      <>
        <DropDown
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          keepMounted
          onClose={handleClose}>
          <DropDownItem onClick={handleDropDownClick}>프로필</DropDownItem>
          <DropDownItem onClick={handleDropDownClick}>내 계정</DropDownItem>
          <DropDownItem onClick={handleDropDownClick}>로그아웃</DropDownItem>
        </DropDown>
        <Box onClick={handleClick}>
          <Avatar variant="rounded">J</Avatar>
        </Box>
      </>
    );
  }

  function Login(props) {
    return (
      <Box
        fontWeight="bold"
        cursor="pointer"
        onMouseEnter={(event) => {
          event.target.style.color = "blue";
          event.target.style.backgroundColor = "#F0F8FF";
        }}
        onMouseLeave={(event) => {
          event.target.style.color = "black";
          event.target.style.backgroundColor = "white";
          event.target.style.border = null;
        }}
        onMouseOver={(event) => {
          event.target.style.cursor = "pointer";
        }}
        style={{
          color: "black",
          padding: "10px",

          borderRadius: "5px",
          backgroundColor: "white",
        }}>
        로그인/가입
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center">
      {/* 검색창 */}
      <Box marginRight="10px" padding="10px">
        <SearchBox />
      </Box>
      {/* 알림 */}
      {/* 추후 NotiIcon 에 들어갈 값 동적으로 작업 필요 */}
      <Box marginRight="10px" padding="10px">
        {NotiIcon(true)}
      </Box>
      {/* 프로필 */}
      <Box margin="0px 20px">{isLogin ? <Profile /> : <Login />}</Box>
    </Box>
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
