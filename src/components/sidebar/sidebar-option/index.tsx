import { NavLink } from "react-router-dom";

interface Props {
    path: string;
    lable: string;
    icon: string;
}

const SideMenuOption = ({ path, lable, icon }: Props) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) => `bg-[#151718] 
                ${isActive ? "bg-slate-200 " : " "}
            `}
        >
            <div className="flex items-center mt-2 space-x-4 w-[90%] m-auto rounded-md px-4 py-3  text-[#898B8D] hover:bg-[#ffffff2a] hover:text-white ">
                <img src={icon} alt="" />
                <span className="font-medium font-roboto">{lable}</span>
            </div>
        </NavLink>
    );
};

export default SideMenuOption;
