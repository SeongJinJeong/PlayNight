import Header from "./ui/Header";
import { Route, Switch } from "react-router-dom";

// Page Import
import Home from "./Components/Home";
import Test from "./Components/Test";

function App() {
  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "rgb(249, 249, 249)",
          display: "block",
          minHeight: window.innerHeight,
          overflow: "hidden",
        }}>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/fuck">
            <Test />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
