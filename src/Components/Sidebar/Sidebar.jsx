// Sidebar.jsx
import { CalendarDays, CalendarPlus, Users, Sun, Shield, Lock, SlidersHorizontal, Clock, LogOut, Columns3Cog } from "lucide-react";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../Redux/Slices/AuthSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const classItems = [
        { icon: <Clock size={18} />, label: "Daily View" },
        { icon: <CalendarDays size={18} />, label: "Weekly View" },
        { icon: <CalendarPlus size={18} />, label: "Add to Calendar" },
        { icon: <Users size={18} />, label: "Classmates" },
    ];

    const settingItems = [
        { icon: <Sun size={18} />, label: "Theme Settings" },
        { icon: <Shield size={18} />, label: "Privacy Settings" },
        { icon: <Lock size={18} />, label: "Account Security" },
        { icon: <SlidersHorizontal size={18} />, label: "Preference" },
    ];

    return (
        <div className="h-screen w-64 bg-gray-300 font-mont p-6 flex flex-col  justify-between gap-6">
            <h1 className="text-2xl font-bold mb-4">CampusFlow</h1>

            <div>
                <h2 className="text-sm font-semibold uppercase mb-2">Class</h2>
                <nav className="flex flex-col gap-2">
                    {classItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="flex items-center gap-3 p-2 rounded-md hover:scale-105 hover:font-semibold  transition"
                        >
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div>
                <h2 className="text-sm  font-semibold uppercase mt-4 mb-2">Settings</h2>
                <nav className="flex flex-col gap-2">
                    {settingItems.map((item, idx) => (
                        <button key={idx} className="flex items-center gap-3 p-2 rounded-md hover:scale-105 hover:font-semibold transition">
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
            <div>
                <nav>
                    <button
                        className="flex items-center gap-3 p-2 rounded-md hover:scale-105 hover:font-semibold transition text-sm"
                        onClick={() => dispatch(setIsAuthenticated(false))}
                    >
                        <LogOut />
                        Sign Out
                    </button>
                    <button className="flex items-center gap-3 p-2 rounded-md hover:scale-105 hover:font-semibold transition text-sm">
                        <Columns3Cog />
                        Customization
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
