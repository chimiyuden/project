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

const Team = () => {
  return (
    <div className="page-container">
      <Nav />

      <div className="section-header">
        <h1 className="section-title">Meet Our Team</h1>
        <p className="section-subtitle">
          The talented individuals who make our library platform exceptional
        </p>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="profile-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default-profile.png";
                }}
              />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
