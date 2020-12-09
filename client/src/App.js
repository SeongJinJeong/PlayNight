import Header from "./ui/Header";
import Contents from "./ui/Contents";

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
        }}
      >
        <Header />
        <Contents />
      </div>
    </>
  );
}

export default App;
