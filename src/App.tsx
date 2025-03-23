import { useState } from "react";
import EggSelection from "./components/Selection/EggSelection.jsx";
import Timer from "./components/Timer/Timer.jsx";

function App() {
  const [selectedEgg, setSelectedEgg] = useState(null);


  return (
    <>
      <div className="font-sans">
        {selectedEgg ? (
        <Timer egg={selectedEgg} onSelect={setSelectedEgg}  />
      ) : (
        <EggSelection onSelect={setSelectedEgg} />
      )}
      </div>
    </>
  )
}

export default App
