import { useEffect, useState } from "react";

type ProgressiveTextProps = {
    text: string;
    speed: number;
    onDone?: () => void;
};

export const ProgressiveText = ({
    text,
    speed = 50,
    onDone,
}: ProgressiveTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true); // Track cursor visibility

    useEffect(() => {
        let index = 0;
        setDisplayedText("")
        const interval = setInterval(() => {
            if (index < text.length - 1) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                console.log("done!");
                
                if (onDone) {
                    onDone();
                    setDisplayedText("");
                }
                clearInterval(interval);
            }
        }, speed);

        return () => {
            return clearInterval(interval);
        };
    }, [text, speed, onDone]);

    useEffect(() => {
        // Toggle cursor visibility every 500ms
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval); // Cleanup cursor blink interval
    }, []);

    return (
        <pre>
            {displayedText}
            {showCursor && (
                <span
                    style={{
                        display: "inline-block",
                        width: "10px",
                        height: "1em",
                        backgroundColor: "#090",
                    }}
                />
            )}
        </pre>
    );
};
