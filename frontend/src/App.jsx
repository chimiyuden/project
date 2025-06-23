import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
// import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
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
