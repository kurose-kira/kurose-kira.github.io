import "./App.css";
import avatar from "./assets/avatar.jpg";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div style={{ padding: "40px 0", lineHeight: "1.6" }}>
      <header>
        <img src={avatar} alt="avatar.jpg" />
        <h1>黒瀬 綺（くろせ きら）</h1>
        <p>低レベル & フルスタック エンジニア</p>
      </header>
      <Skills />
      <Tools />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default App;
