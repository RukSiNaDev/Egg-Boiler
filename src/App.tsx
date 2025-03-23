import { useState } from "react";
import EggSelection from "./components/Selection/EggSelection";
import Timer from "./components/Timer/Timer";

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
