import { useState, useEffect, useRef } from "react";
import Popup from '../AlertPopup/Popup'

const Timer = ({ egg, onSelect }) => {
    const [timeLeft, setTimeLeft] = useState(egg.time);
    const [isDone, setIsDone] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/assets/alarm-clock.mp3");
            audioRef.current.loop = true;
        }
        if (timeLeft <= 0) { 
            setIsDone(true);
            audioRef.current.play().catch(err => console.error("Audio play failed:", err));
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const onClose = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsDone(false)
        onSelect(null)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-yellow-400 min-h-screen text-center">
            <h2 className="text-3xl font-bold mb-4">{egg.label} Egg Cooking...</h2>
            <img src={'/assets/cooking.gif'} />
            <div className="text-4xl font-bold mb-4 bg-white px-6 py-3 rounded-lg shadow-md">
                {/* Time Left: {timeLeft} seconds */}
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </div>
            {
                isDone ?
                    <Popup message="🥚 ไข่ต้มเสร็จแล้ว! พร้อมเสิร์ฟ 🎉" onClose={() => onClose()} />
                    : ''
            }
        </div>
    );
};

export default Timer;
