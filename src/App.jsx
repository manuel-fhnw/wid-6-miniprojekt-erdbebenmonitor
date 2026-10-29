import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import { useState } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focus, setFocus] = useState({})
  const [size, setSize] = useState(1)

  return (
    <div className="app">
      <Header />
      <Sidebar focus={focus} size={size} setSize={setSize}/>
      <div className="mainArea">
        <Map setFocus={setFocus} size={size}/>
      </div>
    </div>
  );
}

export default App;
