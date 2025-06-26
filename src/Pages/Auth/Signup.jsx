import React, { useState } from "react";
import Container from "../../Components/Layout/Container";
import LoginImage from "../../assets/Images/login.jpg";
import Input from "../../Components/Common/Input";
import Button from "../../Components/Common/Button";
import Navbar from "../../Components/Navbar/Navbar";
import OtpInput from "../../Components/Otp/OtpInput";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: "",
        fullName: "",
        password: "",
        confirmPassword: "",
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
            fullName: "",
            password: "",
            confirmPassword: "",
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

    const handleGoogleLogin = () => {
        toast.info("Comming Soon");
    };
    const handleFaceBookLogin = () => {
        toast.info("Comming Soon");
    };

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
                    <h1 className="font-bold text-3xl text-center">Organized? Overwhelmed? Or need a break?</h1>
                    <p>Discover the perfect class schedule for every mood!</p>

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
                                placeholder={"Full Name"}
                                name={"fullName"}
                                type="text"
                                value={userData.fullName}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                            />
                            <Input
                                placeholder={"Password"}
                                name={"password"}
                                type="password"
                                value={userData.password}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                            />
                            <Input
                                placeholder={"Confirm password"}
                                name={"confirmPassword"}
                                type="password"
                                value={userData.confirmPassword}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                error={
                                    userData.confirmPassword && userData.password !== userData.confirmPassword
                                        ? "Oops! The passwords don’t match."
                                        : ""
                                }
                            />
                            <Button type="submit" className="">
                                Get Started
                            </Button>
                            <p className="flex justify-center">Or connect with</p>
                            <div className="w-full flex justify-between ">
                                <Button type="button" variant="secondary" className="w-48" onClick={handleGoogleLogin}>
                                    Google
                                </Button>
                                <Button type="button" variant="secondary" className="w-48  " onClick={handleFaceBookLogin}>
                                    Facebook
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <OtpInput onSubmit={handleOtpVerificaiton}/>
                    )}
                </div>
            </Container>
        </>
    );
}
