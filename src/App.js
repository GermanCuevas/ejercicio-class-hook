import Clock from "./components/Clock";
import ClockHook from "./components/ClockHook";

function App() {
  const style = {
    textAlign: "center",
    color: "red",
  };
  return (
    <div style={style}>
      <ClockHook />
      <hr />
      <Clock />
    </div>
  );
}

export default App;
