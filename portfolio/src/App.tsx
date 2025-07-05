import "./App.css";
import Blurb from "./components/Blurb";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Blurb />
      </div>
    </div>
  );
}

export default App;
