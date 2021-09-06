import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Weather defaultCity="Malta" />
          </div>
          <div className="col-6">
            <div className="imagemDireita"></div>
          </div>
        </div>
      </div>
      <footer>
        this project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/sara-nascimento-71a29b156/"
          target="_blank"
          rel="noreferrer"
        >
          sara nascimento
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/saranascimento9/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open sourced
        </a>
      </footer>
    </div>
  );
}
