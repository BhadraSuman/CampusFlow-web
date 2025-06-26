import React, { useRef, useState, useEffect } from "react";
import Button from "../Common/Button";

export default function OtpInput({ length = 6, onSubmit }) {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer]);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return; // Only allow 0-9 or empty string

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        } else {
            // If last input and all filled, auto-submit
            if (newOtp.every((digit) => digit !== "")) {
                const finalOtp = newOtp.join("");
                onSubmit(finalOtp);
                console.log("OTP auto-submitted:", finalOtp);
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        // Prevent non-numeric keypresses (except navigation keys)
        if (!["Backspace", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
        if (!paste) return;

        const pasteArr = paste.split("");
        const newOtp = Array(length).fill("");
        pasteArr.forEach((val, i) => {
            newOtp[i] = val;
            inputRefs.current[i]?.focus();
        });
        setOtp(newOtp);
    };

    const handleSubmit = () => {
        if (otp.every((digit) => digit !== "")) {
            const finalOtp = otp.join("");
            console.log("OTP submitted:", finalOtp); // clearer console output
            onSubmit(finalOtp);
        } else {
            console.warn("OTP is incomplete:", otp);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                {otp.map((digit, idx) => (
                    <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="w-12 h-12 text-xl text-center border rounded-md border-gray-300 focus:outline-none focus:border-green-500"
                    />
                ))}
            </div>

            <Button onClick={handleSubmit} disabled={otp.some((digit) => digit === "")} className=" disabled:opacity-50 w-36">
                Verify OTP
            </Button>

            <div className="text-sm text-gray-500">
                {timer > 0 ? (
                    <>
                        Resend OTP in <span className="font-medium">{timer}</span>s
                    </>
                ) : (
                    <Button onClick={() => setTimer(30)} className="w-36">
                        Resend OTP
                    </Button>
                )}
            </div>
        </div>
    );
}
