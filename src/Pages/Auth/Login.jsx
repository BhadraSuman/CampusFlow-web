import React, { useState } from "react";
import Container from "../../Components/Layout/Container";
import LoginImage from "../../assets/Images/login2.jpg";
import Input from "../../Components/Common/Input";
import Button from "../../Components/Common/Button";
import Navbar from "../../Components/Navbar/Navbar";
import OtpInput from "../../Components/Otp/OtpInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "../../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";



export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [loading, setloading] = useState(false);
    const [vertifyOtp, setVerifyOtp] = useState(false);

    const handleChange = (name, value) => {
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        setUserData({
            email: "",
            password: "",
        });
        toast.success("OTP sent to your mail");
        setVerifyOtp(true);
    };

    const handleOtpVerificaiton = (otp) => {
        try {
    // You might want to validate OTP here (e.g., API call)
    toast.success("OTP Verification Successful");

    // Update auth state
    dispatch(setIsAuthenticated(true));

    // Navigate to home
    navigate("/");
  } catch (error) {
    toast.error("OTP verification failed. Please try again.");
    console.error(error);
  }
        
    };

    const handleGoogleLogin = ()=>{
        toast.info('Comming Soon')
    }
    const handleFaceBookLogin = ()=>{
        toast.info('Comming Soon')
    }

    return (
        <>
            <Navbar />
            <Container>
                <div className="w-1/2 px-20 ">
                    <div className="rounded-2xl overflow-clip ">
                        <img src={LoginImage} alt="Login Illustration" className="w-full h-auto object-cover" />
                    </div>
                </div>
                <div className="w-1/2  px-20 flex flex-col justify-center items-center gap-5">
                    <h1 className="font-bold text-3xl text-center">Welcome Back, We've Missed You!</h1>
                    <p>Login to your account</p>

                    {!vertifyOtp ? (
                        <form className="w-full flex flex-col justify-center gap-5 px-12" onSubmit={handleSubmit}>
                            <Input
                                placeholder={"Your mail"}
                                name={"email"}
                                type="email"
                                value={userData.email}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                            />

                            <Input
                                placeholder={"Password"}
                                name={"password"}
                                type="password"
                                value={userData.password}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                            />

                            <Button type="submit" className="">
                                Get Started
                            </Button>
                            <p className="flex justify-center">Or connect with</p>
                            <div className="w-full flex justify-between ">
                                <Button type='button' variant="secondary" className="w-48" onClick={handleGoogleLogin}>
                                    Google
                                </Button>
                                <Button type='button' variant="secondary" className="w-48  " onClick={handleFaceBookLogin}>
                                    Facebook
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <OtpInput onSubmit={handleOtpVerificaiton} />
                    )}
                </div>
            </Container>
        </>
    );
}
