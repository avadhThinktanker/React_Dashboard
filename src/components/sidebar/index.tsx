import SidemenuOption from "./sidebar-option";
import { sidebarOptions } from "../../constants/SidebarOption";

const Sidebar = () => {
    return (
        <>
            <aside className="flex-1 max-w-56 min-h-screen bg-[#151718] text-white">
                {sidebarOptions.map(({ path, icon, lable }) => (
                    <SidemenuOption key={path} path={path} lable={lable} icon={icon} />
                ))}
            </aside>
        </>
    );
};

export default Sidebar;
