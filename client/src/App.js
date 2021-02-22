import Header from "./ui/Header";
import { Route, Switch } from "react-router-dom";

// Page Import
import Home from "./Components/Home";
import Test from "./Components/Test";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <div style={AppStyle}>
        {/* 헤더 영역 */}
        <Header />
        {/* -------------------------------------- */}

        {/* 컨텐츠 영역 */}
        {/* 컨텐츠 영역을 라우터로 분리 */}

        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/fuck">
            <Test />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        {/* -------------------------------------- */}
        {/* -------------------------------------- */}
      </div>
    </>
  );
}

const AppStyle = {
  margin: 0,
  padding: 0,

  backgroundColor: "#F5F6F7",

  display: "block",
  overflow: "hidden",

  minHeight: window.innerHeight,
};

export default App;
