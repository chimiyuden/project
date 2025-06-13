import AppRoutes from "../../../my-app-cors/src/routes/AppRoutes";

const { useState, useEffect } = require("react");
const {
  default: axios,
} = require("../../../my-app-cors/src/config/axiosConfig");

function App() {
  const [healthStatus, setHealthStatus] = useState("Checking...");

  useEffect(() => {
    axios
      .get("http://localhost:3000/health")
      .then((response) => setHealthStatus(response.data))
      .catch(() => setHealthStatus("Faild to fetch health status"));
  }, {});

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
