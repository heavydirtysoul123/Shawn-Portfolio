import "../pages/pages.css";

export default function About() {
  return (
    <div className="page-container">
      <div className="about-section">
        <h1 className="page-title">About Me</h1>
        <p className="page-text">
          Hello! I'm a passionate developer dedicated to crafting responsive, user-friendly, and high-performing web applications. I enjoy solving problems, learning new technologies, and building solutions that make a difference.
        </p>
        <p className="page-text">
          With a strong foundation in front-end and back-end technologies, I bring ideas to life through thoughtful design and clean, maintainable code. Whether it's collaborating on a team project or building something independently, I'm always excited to create something impactful.
        </p>
      </div>
      <h2 class="tools-title">Skills</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <img src="/icons/laravel.svg" alt="Laravel Icon" />
          <span>Laravel</span>
        </div>
        <div class="skill-item">
          <img src="/icons/php.svg" alt="PHP Icon" />
          <span>PHP</span>
        </div>
        <div class="skill-item">
          <img src="/icons/js.svg" alt="JavaScript Icon" />
          <span>JavaScript</span>
        </div>
        <div class="skill-item">
          <img src="/icons/html-5.svg" alt="HTML5 Icon" />
          <span>HTML5</span>
        </div>
        <div class="skill-item">
          <img src="/icons/css-3.svg" alt="CSS3 Icon" />
          <span>CSS3</span>
        </div>
        <div class="skill-item">
          <img src="/icons/react-svgrepo-com.svg" alt="React Icon" />
          <span>React</span>
        </div>
        <div class="skill-item">
          <img src="/icons/css-3.svg" alt="CSS3 Icon" />
          <span>CSS3</span>
        </div>
        <div class="skill-item">
          <img src="/icons/vue-vuejs.svg" alt="VUE ICon" />
          <span>Vue</span>
        </div>
        <div class="skill-item">
          <img src="/icons/bootstrap.svg" alt="Bootstrap Icon" />
          <span>Bootstrap</span>
        </div>

      </div>

      <h2 class="tools-title">Tools I Use</h2>
      <div class="tools-grid">
        <div class="tool-card">
          <img src="/icons/vscode.svg" alt="VS Code" />
          <span>VS Code</span>
        </div>
        <div class="tool-card">
          <img src="/icons/github.svg" alt="GitHub" />
          <span>GitHub</span>
        </div>
        <div class="tool-card">
          <img src="/icons/git.svg" alt="Git" />
          <span>Git</span>
        </div>
        <div class="tool-card">
          <img src="/icons/figma.svg" alt="Figma" />
          <span>Figma</span>
        </div>
        <div class="tool-card">
          <img src="/icons/postman.svg" alt="Postman" />
          <span>Postman</span>
        </div>
        <div class="tool-card">
          <img src="/icons/docker.svg" alt="Docker" />
          <span>Docker</span>
        </div>
        <div class="tool-card">
          <img src="/icons/aws.svg" alt="Aws" />
          <span>Aws</span>
        </div>
      </div>

    </div>
  );
}
