import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Contents from "../ui/Contents";

function Login(props) {
  useEffect(() => {}, []);
  return (
    <>
      <Contents elements={<LoginWrapper />} />
    </>
  );
}

function LoginWrapper() {
  return (
    <div style={LoginWrapperStyle}>
      <LoginTitle />
      <LoginForm />
    </div>
  );
}

const LoginWrapperStyle = {
  height: "100%",
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "Center",
  flexDirection: "column",
};

function LoginTitle() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <h1
      style={{
        fontSize: "500%",
      }}
      onClick={handleLogoClick}
      onMouseOver={(e) => {
        e.target.style.cursor = "pointer";
      }}>
      LOGO
    </h1>
  );
}

function LoginForm(props) {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");

  const history = useHistory();

  // 추후, Fetch 로 로그인 처리 로직 작성 필요
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log(`ID : ${id} && PassWd : ${passwd}`);
    history.push("/");
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPasswd(e.target.value);
  };
  return (
    <div style={LoginFormDivStyle}>
      <form onSubmit={handleLoginFormSubmit} style={LoginFormStyle}>
        <input
          type="text"
          style={inputStyle}
          placeholder="아이디"
          onChange={handleIdChange}
        />

        <input
          type="password"
          style={inputStyle}
          placeholder="비밀번호"
          onChange={handlePwChange}
        />
        <button type="submit" style={inputStyle}>
          LOGIN
        </button>
        <div style={(inputStyle, { display: "space-between" })}>
          <span
            style={{ marginRight: "10px" }}
            onClick={(e) => {
              history.push("/register");
            }}>
            회원가입
          </span>
          <span
            style={{ marginRight: "10px" }}
            onClick={(e) => {
              history.push("/accountSearch");
            }}>
            아이디/비밀번호 찾기
          </span>
        </div>
      </form>
    </div>
  );
}

const LoginFormDivStyle = {
  width: "80%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const LoginFormStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  width: "60%",
};

const inputStyle = {
  width: "80%",
  height: "60px",

  marginTop: "10px",

  textAlign: "center",
};

export default Login;
