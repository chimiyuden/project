import Nav from "../../components/nav/Nav";
import chimiPhoto from "../../assets/chimi.png";
import tenzinPhoto from "../../assets/tenzin.png";
import karmaPhoto from "../../assets/karma.png";
import kuenzangPhoto from "../../assets/kuenzang.png";
import tsheringPhoto from "../../assets/tshering.png";

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
    skills: ["CSS", "Animations", "Responsive Design"],
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
      <div className="about-books">
        <h2 className="books-heading">📚 About the Library Project</h2>
        <p className="books-intro">
          Our library project is built for readers, by readers. It’s a digital
          sanctuary for book lovers where you can log your favorite books, track
          your reading journey, and discover new titles across genres.
        </p>

        <div className="book-features">
          <div className="feature">
            <h4>📖 Track Reading</h4>
            <p>
              Keep a log of what you've read, what you're reading, and what's
              next on your list.
            </p>
          </div>
          <div className="feature">
            <h4>🌐 Discover Books</h4>
            <p>
              Explore recommendations from your team and community based on
              genres and interests.
            </p>
          </div>
          <div className="feature">
            <h4>🧠 Build Habits</h4>
            <p>
              Create a habit of reading by setting goals and seeing your
              progress visually.
            </p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="card-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-profile"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default-profile.png";
                  }}
                />
              </div>

              <div className="card-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>

                {/* Only for first member show skills and contributions */}
                {index === 0 && (
                  <>
                    <div className="team-section">
                      <strong>Skills</strong>
                      <ul>
                        {member.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="team-section">
                      <strong>Contributions</strong>
                      <ul>
                        {member.contributions.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
