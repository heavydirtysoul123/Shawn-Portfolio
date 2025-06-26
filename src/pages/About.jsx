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

      <h2 className="tools-title">Skills</h2>
      <div className="skills-grid">
        {[
          ["laravel.svg", "Laravel"],
          ["php.svg", "PHP"],
          ["js.svg", "JavaScript"],
          ["html-5.svg", "HTML5"],
          ["css-3.svg", "CSS3"],
          ["react-svgrepo-com.svg", "React"],
          ["css-3.svg", "CSS3"],
          ["vue-vuejs.svg", "Vue"],
          ["bootstrap.svg", "Bootstrap"]
        ].map(([icon, label]) => (
          <div className="skill-item" key={label}>
            <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} alt={`${label} Icon`} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <h2 className="tools-title">Tools I Use</h2>
      <div className="tools-grid">
        {[
          ["vscode.svg", "VS Code"],
          ["github.svg", "GitHub"],
          ["git.svg", "Git"],
          ["figma.svg", "Figma"],
          ["postman.svg", "Postman"],
          ["docker.svg", "Docker"],
          ["aws.svg", "Aws"]
        ].map(([icon, label]) => (
          <div className="tool-card" key={label}>
            <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} alt={label} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
