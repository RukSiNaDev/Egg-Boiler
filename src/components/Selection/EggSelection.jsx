import EggCard from "../EggCard/EggCard";

const EggSelection = ({ onSelect }) => {
  const eggs = [
    { image: "../../assets/soft-egg.gif", label: "Soft Boiled" , time: 300},
    { image: "../../assets/midium-egg.gif", label: "Medium Boiled", time: 600 },
    { image: "../../assets/well-done.gif", label: "Hard Boiled", time: 720 }
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-yellow-400 min-h-screen text-center">
      <h2 className="text-3xl font-bold mb-4">Choose Type Egg</h2>
      <div className="flex gap-6 flex-wrap justify-center md:flex-row sm:flex-col">
      {/* <div className="flex gap-6 flex-wrap justify-center md:flex-nowrap"> */}
        {eggs.map((egg) => (
          <EggCard key={egg.label} {...egg} onClick={() => onSelect(egg)} />
        ))}
      </div>
    </div>
  );
};

export default EggSelection;