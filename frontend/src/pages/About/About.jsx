
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About MyLibrary</h1>

      <section style={styles.text}>
        <p>
          <strong>MyLibrary</strong> is your personal book library built with React. Sign up, log in,
          and manage your collection—view, add, edit, or delete books—all from your dashboard.
        </p>
      </section>

      <section style={styles.text}>
        <h2>Our Mission</h2>
        <p>
          We created MyLibrary to help readers like you keep their reading lists organized in one
          place. Say goodbye to scattered spreadsheets or notes—everything lives here.
        </p>
      </section>

      <section style={styles.text}>
        <h2>Key Features</h2>
        <ul>
          <li>📔 Full Book CRUD: View, add, edit, and delete books.</li>
          <li>👤 Secure Authentication: Register, log in, and stay logged in.</li>
          <li>⚙️ User Profiles: Manage your personal details.</li>
          <li>📚 Genres Covered: Science Fiction, Mystery, Fantasy, Romance.</li>
        </ul>
      </section>

      <section style={styles.text}>
        <h2>Why It Matters</h2>
        <p>
          By focusing on simplicity and clarity, MyLibrary helps you spend more time reading and
          less time managing lists—making organization effortless and fun. :contentReference[oaicite:1]{index=1}
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: { maxWidth: '640px', margin: '2rem auto', padding: '0 1rem' },
  heading: { textAlign: 'center', marginBottom: '1.5rem' },
  text: { lineHeight: 1.6, marginBottom: '1.2rem' },
};

export default About;
