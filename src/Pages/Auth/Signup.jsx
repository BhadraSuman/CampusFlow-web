import React, { useState } from "react";
import Container from "../../Components/Layout/Container";
import LoginImage from "../../assets/Images/login.jpg";
import Input from "../../Components/Common/Input";
import Button from "../../Components/Common/Button";
import Navbar from "../../Components/Navbar/Navbar";

export default function Signup() {
    const [userData, setUserData] = useState({
        email: "",
        fullName: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setloading] = useState(false);

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
                            <Button className="w-40">Google</Button>
                            <Button className="w-40">Facebook</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    );
}
