import ChatBox from "./Components/ChatBox";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1 style={{ textAlign: "center", color: "purple" }}>Chat App</h1>
      <ChatBox />
    </div>
  );
}

export default App;
