import Nav from "../components/Nav";

import chimiPhoto from "../assets/chimi.png";
import tenzinPhoto from "../assets/tenzin.png";
import karmaPhoto from "../assets/karma.png";
import kuenzangPhoto from "../assets/kuenzang.png";
import tsheringPhoto from "../assets/tshering.png";

const teamMembers = [
  {
    name: "Chimi Yuden",
    role: "Full-Stack Developer",
    description:
      "Specializes in both frontend (React) and backend (Node.js) development",
    image: chimiPhoto,
  },
  {
    name: "Tenzin",
    role: "Backend Developer",
    description:
      "Focuses on server-side logic, database interactions, and API development",
    image: tenzinPhoto,
  },
  {
    name: "Karma",
    role: "Backend Developer",
    description: "Expert in database architecture and server optimization",
    image: karmaPhoto,
  },
  {
    name: "Kuenzang",
    role: "Frontend Developer",
    description:
      "Specializes in building responsive and accessible user interfaces",
    image: kuenzangPhoto,
  },
  {
    name: "Tshering",
    role: "CSS Specialist",
    description:
      "Focuses on styling, animations, and creating visually appealing interfaces",
    image: tsheringPhoto,
  },
];

const styles = {
  pageContainer: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    paddingTop: "80px", // Account for fixed navbar
  },
  teamContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "32px",
    padding: "40px 5%",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  teamMember: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "32px 24px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.03)",
    border: "1px solid #e2e8f0",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    },
  },
  profileImageContainer: {
    width: "160px",
    height: "160px",
    margin: "0 auto 24px",
    position: "relative",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ffffff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  memberName: {
    fontSize: "1.4rem",
    margin: "0 0 8px 0",
    color: "#1e293b",
    fontWeight: "600",
    lineHeight: "1.3",
  },
  memberRole: {
    color: "#3b82f6",
    fontWeight: "500",
    margin: "0 0 16px 0",
    fontSize: "1rem",
    position: "relative",
    display: "inline-block",
    paddingBottom: "8px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "48px",
      height: "3px",
      backgroundColor: "#3b82f6",
      borderRadius: "3px",
    },
  },
  memberDescription: {
    color: "#64748b",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    margin: "16px 0 0 0",
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "48px",
    padding: "0 5%",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "16px",
  },
  sectionSubtitle: {
    fontSize: "1.1rem",
    color: "#64748b",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
};

const Team = () => {
  return (
    <div style={styles.pageContainer}>
      <Nav />

      <div style={styles.sectionHeader}>
        <h1 style={styles.sectionTitle}>Meet Our Team</h1>
        <p style={styles.sectionSubtitle}>
          The talented individuals who make our library platform exceptional
        </p>
      </div>

      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.teamMember}>
            <div style={styles.profileImageContainer}>
              <img
                src={member.image}
                alt={member.name}
                style={styles.profileImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default-profile.";
                }}
              />
            </div>
            <h3 style={styles.memberName}>{member.name}</h3>
            <p style={styles.memberRole}>{member.role}</p>
            <p style={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
