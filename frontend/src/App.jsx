import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [healthStatus, setHealthStatus] = useState("Checking...");

  useEffect(() => {
    axios
      .get("http://localhost:3000/health")
      .then((response) => setHealthStatus(response.data))
      .catch(() => setHealthStatus("Faild to fetch health status"));
  }, {});

  return <div>hello</div>;
}

export default App;
