import { useContext } from "react";
import "./App.css";

import Extension from "./components/extensions/Extension";
import Switch from "./components/extensions/Switch";
import { AuthContext } from "./components/store/AuthContext";
import Chart from "./components/Chat/Chart";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      
      <div className="Chartbox">
      <div className="control">
          <Extension />
        </div>
        <div className="control">
          <h1>For Help</h1>
        </div>

        <div className="actions">
          <Switch />
        </div>
        {ctx.isActive && <Chart />}
      </div>
      
    </div>
  );
}

export default App;
