import { SiGithub, SiX, SiDiscord } from "react-icons/si";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <section className="glass-panel">
      <h2>Links</h2>

      <div className="social-links">
        <a href="https://github.com/kurose-kira" className="glass-link">
          <SiGithub size={24} /> <span>GitHub</span>
        </a>
        <a href="https://x.com/kurose_kira_" className="glass-link">
          <SiX size={24} /> <span>𝕏 (旧 Twitter)</span>
        </a>
        <a
          href="https://discord.com/users/1443259259570880573"
          className="glass-link"
        >
          <SiDiscord size={24} /> <span>Discord</span>
        </a>
      </div>
    </section>
  );
}

export default SocialLinks; // この形式で全く問題ありません
