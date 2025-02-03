import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface Props {
    path: string;
    lable: string;
    icon: IconType;
}

const SideMenuOption = ({ path, lable, icon: Icon }: Props) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) => `
                ${isActive ? "bg-slate-200 " : " text-gray-500"}
            `}
        >
            <div className="flex items-center mt-2 space-x-4 rounded-md px-4 py-3  hover:bg-slate-200 w-[80%] m-auto">
                <Icon className="text-xl" />
                <span className="font-medium">{lable}</span>
            </div>
        </NavLink>
    );
};

export default SideMenuOption;
