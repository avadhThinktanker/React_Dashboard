import SidemenuOption from "./sidebar-option";
import { sidebarOptions } from "../../constants/SidebarOption";
import { NavLink } from "react-router-dom";
import settingicon from "../../../public/svg/setting-icon.svg";
import logout from "../../../public/svg/logout.png";

const Sidebar = () => {
    return (
        <>
            <aside className="hidden md:block flex-1 justify-between max-w-56 min-h-screen bg-[#151718]">
                <div>
                    {sidebarOptions.map(({ path, src, lable }) => (
                        <SidemenuOption key={src} path={path} lable={lable} icon={src} />
                    ))}
                </div>
                <div className="line p-2">
                    <hr className="border-t border-[#8E8F931A]" />
                </div>
                <div className="setting-btn">
                    <NavLink
                        to="settings"
                        className={({ isActive }) => ` text-[#898B8D] hover:bg-[#ffffff2a] hover:text-white
                ${isActive ? "bg-[#ffffff2a] text-white " : ""}`}
                    >
                        <div className="flex items-center mt-2 space-x-4 rounded-md px-4 py-3 w-[90%] m-auto ">
                            <img src={settingicon} alt="setting-icon" />
                            <span className="font-medium">Settings</span>
                        </div>
                    </NavLink>
                </div>
                <button className="w-full ">
                    <div className="flex items-center mt-2 space-x-4 rounded-md px-4 py-3 w-[90%] m-auto text-[#898B8D] hover:bg-[#ffffff2a] hover:text-white">
                        <img src={logout} alt="hide-icon" />
                        <span className="font-medium">Hide</span>
                    </div>
                </button>
            </aside>
        </>
    );
};

export default Sidebar;
