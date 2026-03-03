import "./Note.css";

function Note() {
  return (
    <section className="glass-panel">
      <h2>Note</h2>

      <div className="note-messages">
        <p className="message">当プロフィールはNode.jsにより動いています。</p>
        <p className="message">開発に使用したツールは以下のとおりです。</p>
        <p className="message">React</p>
        <p className="message">Vite</p>
      </div>
    </section>
  );
}

export default Note;
