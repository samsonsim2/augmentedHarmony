import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <li>
          <div
            style={{
              backgroundColor: "purple",
              width: "100px",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://samsonsim2-default-thelaylaway.dev.8thwall.app/samson-test/"
            >
              Filter 1
            </a>
          </div>
        </li>
        <li>
          <div
            style={{
              backgroundColor: "purple",
              width: "100px",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://samsonsim2-default-thelaylaway.dev.8thwall.app/samson-test/"
            >
              Filter 2
            </a>
          </div>
        </li>
        <li>
          <div
            style={{
              backgroundColor: "purple",
              width: "100px",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://samsonsim2-default-thelaylaway.dev.8thwall.app/samson-test/"
            >
              Filter 3
            </a>
          </div>
        </li>
        <li>
          <div
            style={{
              backgroundColor: "purple",
              width: "100px",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://samsonsim2-default-thelaylaway.dev.8thwall.app/samson-test/"
            >
              Filter 4
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
