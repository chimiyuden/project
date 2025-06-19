import Nav from "../../components/Nav";
import { useAuth } from "../../contexts/AuthContext";
import { FiUser, FiMail, FiPhone, FiUsers } from "react-icons/fi";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <Nav />
      <div className="profile-content">
        <div className="profile-header">
          <h1 className="profile-title">My Profile</h1>
        </div>

        <div className="profile-card">
          <div className="profile-detail-group">
            <FiUser className="profile-icon" />
            <span className="profile-label">Name</span>
            <span className="profile-value">
              {user?.name || "Not provided"}
            </span>
          </div>

          <div className="profile-detail-group">
            <FiMail className="profile-icon" />
            <span className="profile-label">Email</span>
            <span className="profile-value">
              {user?.email || "Not provided"}
            </span>
          </div>

          <div className="profile-detail-group">
            <FiPhone className="profile-icon" />
            <span className="profile-label">Phone</span>
            <span className="profile-value">
              {user?.phoneNumber || "Not provided"}
            </span>
          </div>

          <div className="profile-detail-group">
            <FiUsers className="profile-icon" />
            <span className="profile-label">Gender</span>
            <span className="profile-value">
              {user?.gender
                ? `${user.gender.charAt(0).toUpperCase()}${user.gender.slice(
                    1
                  )}`
                : "Not provided"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
