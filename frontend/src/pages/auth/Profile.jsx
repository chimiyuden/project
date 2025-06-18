import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="library-container">
      <div className="form-container">
        <h2 className="library-title">My Profile</h2>

        <div className="book-detail-container">
          <div className="book-detail-info">
            <div className="form-group">
              <label className="form-label">Name</label>
              <p
                className="form-input"
                style={{
                  background: "transparent",
                  border: "none",
                  paddingLeft: 0,
                  marginTop: "5px",
                }}
              >
                {user?.name || "N/A"}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <p
                className="form-input"
                style={{
                  background: "transparent",
                  border: "none",
                  paddingLeft: 0,
                  marginTop: "5px",
                }}
              >
                {user?.email || "N/A"}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <p
                className="form-input"
                style={{
                  background: "transparent",
                  border: "none",
                  paddingLeft: 0,
                  marginTop: "5px",
                }}
              >
                {user?.phoneNumber || "N/A"}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Gender</label>
              <p
                className="form-input"
                style={{
                  background: "transparent",
                  border: "none",
                  paddingLeft: 0,
                  marginTop: "5px",
                }}
              >
                {user?.gender
                  ? `${user.gender.charAt(0).toUpperCase()}${user.gender.slice(
                      1
                    )}`
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
