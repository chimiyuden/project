import Nav from "../../../components/nav/Nav";
import chimiPhoto from "../../../assets/chimi.png";
import tenzinPhoto from "../../../assets/tenzin.png";
import karmaPhoto from "../../../assets/karma.png";
import kuenzangPhoto from "../../../assets/kuenzang.png";
import tsheringPhoto from "../../../assets/tshering.png";

import "./About.css";

const teamMembers = [
  {
    name: "Chimi Yuden",
    role: "Full-Stack Developer",
    description:
      "Specializes in both frontend (React) and backend (Node.js) development.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    contributions: [
      "Led development of the user authentication system",
      "Integrated RESTful APIs for book CRUD operations",
    ],
    image: chimiPhoto,
  },
  {
    name: "Tenzin Choden",
    role: "Backend Developer",
    description:
      "Focuses on server-side logic, database interactions, and API development.",
    skills: ["Node.js", "Express", "MongoDB", "Postman"],
    contributions: [
      "Built the book and user API routes",
      "Implemented token-based authentication",
    ],
    image: tenzinPhoto,
  },
  {
    name: "Karma Deki Lhazin",
    role: "Backend Developer",
    description: "Expert in database architecture and server optimization.",
    skills: ["MongoDB", "Mongoose", "Docker", "API Security"],
    contributions: [
      "Optimized database queries and indexing",
      "Helped with secure environment setup using .env",
    ],
    image: karmaPhoto,
  },
  {
    name: "Kuenzang Dorji",
    role: "Frontend Developer",
    description:
      "Specializes in building responsive and accessible user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    contributions: [
      "Designed the landing and dashboard pages",
      "Integrated reusable React components",
    ],
    image: kuenzangPhoto,
  },
  {
    name: "Tshering Phuntsho",
    role: "CSS Specialist",
    description:
      "Focuses on styling, animations, and creating visually appealing interfaces.",
    skills: ["CSS3", "Animations", "Tailwind", "Responsive Design"],
    contributions: [
      "Designed team and about pages",
      "Implemented animations and hover effects",
    ],
    image: tsheringPhoto,
  },
];

const Team = () => {
  return (
    <>
      <Nav />
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-member-horizontal ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
          >
            <div className="profile-image-container-horizontal">
              <img
                src={member.image}
                alt={member.name}
                className="profile-image-horizontal"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default-profile.png";
                }}
              />
            </div>

            <div className="member-details">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>

              <div className="member-skills">
                <strong>Skills:</strong>
                <ul>
                  {member.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="member-contributions">
                <strong>Contributions:</strong>
                <ul>
                  {member.contributions.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
