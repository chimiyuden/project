import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import axios from "./configs/axiosConfig";
// import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/health", {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data.meassage);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      {/* <h1>Frontend + Backend</h1>
      <p>Backend says: {data?.message}</p> */}
      <AppRoutes />
    </div>
  );
}

export default App;
