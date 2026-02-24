import "./App.css";
import avatar from "./assets/avatar.jpg";

function App() {
  return (
    <div
      style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.6" }}
    >
      <header>
        <img src={avatar} alt="avatar.jpg" />
        <h1>黒瀬 綺（くろせ きら）</h1>
        <p>低レベル & フルスタック エンジニア</p>
      </header>
      <section>
        <h2>技術スタック</h2>
        <ul>
          <li>
            言語: JavaScript（習得済み）, TypeScript（習得済み）, Python, Rust,
            C, x86_64 Assembly, Java, Kotlin
          </li>
          <li>
            ツール: Vite, React, Next.js, Node.js, Linux（Server
            Administration）
          </li>
        </ul>
      </section>
      <section>
        <h2>現在進行中のプロジェクト</h2>
        <ul>
          <li>
            <strong>テキスト</strong>テキスト
          </li>
        </ul>
      </section>
      <section>
        <h2>Links</h2>
        <a href="https://github.com/kurose-kira">GitHub</a>
        <p></p>
        <a href="https://x.com/kurose_kira">𝕏（旧 Twitter）</a>
      </section>
    </div>
  );
}

export default App;
