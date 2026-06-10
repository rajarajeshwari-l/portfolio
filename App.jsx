import { useState, useEffect } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [data, setData] = useState({
    name: "",
    title: "",
    about: "",
    skills: "",
    education: "",
    projects: "",
    email: "",
    github: "",
    linkedin: "",
  });

  // LOAD saved data when app opens
  useEffect(() => {
    const saved = localStorage.getItem("portfolioData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  // SAVE data automatically when user types
  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(data));
  }, [data]);

  const updateField = (field, value) => {
    setData({ ...data, [field]: value });
  };

  if (!loggedIn) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h1>PortfolioAI 🚀</h1>

          <input style={styles.input} placeholder="Email" />
          <input style={styles.input} type="password" placeholder="Password" />

          <button style={styles.button} onClick={() => setLoggedIn(true)}>
            Login
          </button>

          <button
            style={{ ...styles.button, background: "#444" }}
            onClick={() => setLoggedIn(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* LEFT SIDE */}
      <div style={styles.editor}>
        <h2>Portfolio Builder</h2>

        <input
          style={styles.input}
          placeholder="Name"
          value={data.name}
          onChange={(e) => updateField("name", e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Title"
          value={data.title}
          onChange={(e) => updateField("title", e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="About"
          value={data.about}
          onChange={(e) => updateField("about", e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Skills"
          value={data.skills}
          onChange={(e) => updateField("skills", e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Education"
          value={data.education}
          onChange={(e) => updateField("education", e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Projects"
          value={data.projects}
          onChange={(e) => updateField("projects", e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateField("email", e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="GitHub"
          value={data.github}
          onChange={(e) => updateField("github", e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="LinkedIn"
          value={data.linkedin}
          onChange={(e) => updateField("linkedin", e.target.value)}
        />
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div style={styles.preview}>
        <h1>{data.name || "Your Name"}</h1>
        <h3>{data.title || "Your Title"}</h3>

        <hr />

        <h3>About</h3>
        <p>{data.about}</p>

        <h3>Skills</h3>
        <p>{data.skills}</p>

        <h3>Education</h3>
        <p>{data.education}</p>

        <h3>Projects</h3>
        <p>{data.projects}</p>

        <h3>Contact</h3>
        <p>{data.email}</p>

        <p>
          <a href={data.github} target="_blank">GitHub</a> |{" "}
          <a href={data.linkedin} target="_blank">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
  },
  editor: {
    width: "50%",
    padding: 20,
    overflowY: "auto",
    background: "#f5f5f5",
  },
  preview: {
    width: "50%",
    padding: 20,
    background: "#fff",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  textarea: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    minHeight: 60,
  },
  button: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#eee",
  },
  loginBox: {
    width: 300,
    padding: 20,
    background: "white",
    borderRadius: 10,
  },
};