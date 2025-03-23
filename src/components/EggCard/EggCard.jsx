const EggCard = ({ image, label, onClick }) => {
    return (
        <div className="d-flex">
            <div
                className="bg-white rounded-full p-4 w-40 h-40 flex flex-col items-center justify-center shadow-md hover:scale-110 transition cursor-pointer"
                onClick={onClick}
            >
                <img src={image} alt={label} className="w-32 h-32 object-contain" />

            </div>
            <div>
                <p className="text-2xl font-semibold mt-2">{label}</p>
            </div>
        </div>
    );
};

export default EggCard;