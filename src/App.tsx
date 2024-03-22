import "./App.css";
import axios from "axios";

import { ResponseType } from "./ResponseType";
import { ShortInfo } from "./components/ShortInfo";

import { useState } from "react";
function App() {
  const [ip, setIp] = useState("");
  const [response, setResponse] = useState<ResponseType>();

  const url = "https://localhost:7282/GeoLoc";
  const fetchData = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const resp = await axios.get(url + `/${ip}`, { headers });
    setResponse(resp.data);
    console.log(resp.data);
  };

  return (
    <div>
      <div style={{ display: "grid", gap: "10px" }}>
        <button
          style={{ backgroundColor: "darkslateblue", color: "white" }}
          onClick={() => fetchData()}
        >
          Click ME!!!
        </button>
        <input
          placeholder="ip here"
          type="text"
          onChange={(e) => setIp(e.target.value)}
        />
        {response && <ShortInfo key={ip} {...response} />}
      </div>{" "}
    </div>
  );
}

export default App;
