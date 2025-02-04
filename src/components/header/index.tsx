import { NavLink } from "react-router-dom";
import Input from "./search";
import UserProfile from "./user-profile";
import menu from "../../../public/svg/menu.svg";

const Header = () => {
    const userImage =
        "https://s3-alpha-sig.figma.com/img/ffff/033a/efe4bcb3cff75c23caf607a158d35fa6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E6MthrLiCt3E5UfYW~8hHbdMr8vwUnodvWHY4Ha0OMDRPlaKCx4r~fGJB62gHF5A7gN4rNYmNXrezSmjaQqaPYvuhJU0rZFmhgQ1DzWinnkmkzo0~MesIQ7X0vvXayGazP39oIQKJ87MQ5jA0QSrXc8Vew6~KBPSs4tXzfAIkqlF4v6TbX2r83tn-Es1eV4f7roExKO2x4KaKvZOujMve05rvGg5VxF7VuN69uth-~Lyg7yVawCGNwWBt5qS-1IC-~4BXz7CWQq1T-eUJGOoHJaJ3q-tOI9aYOfi0-YO9yZuR3nxJBBN7rDQuGaFlwM1Uo1WKivQvxJPA0wntargng__";

    return (
        <div className="flex p-4 justify-between items-center flex-wrap shadow-md">
            <UserProfile
                userImg={userImage}
                userName="Avadh Raiyani"
                userClass="Game Tested. Athlete Approved."
            />
            <div className="hidden sm:space-x-3 md:flex gap-10 items-center flex-wrap justify-center space-x-6 ">
                <NavLink
                    to="/for-you"
                    className={({ isActive }) =>
                        isActive ? "font-medium" : "text-gray-700"
                    }
                >
                    For you
                </NavLink>
                <NavLink
                    to="/following"
                    className={({ isActive }) =>
                        isActive ? "font-medium" : "text-gray-700"
                    }
                >
                    Following
                </NavLink>
                <NavLink
                    to="/popular"
                    className={({ isActive }) =>
                        isActive ? "font-medium" : "text-gray-700"
                    }
                >
                    Popular
                </NavLink>
            </div>
            <div className="hidden md:block">
                <Input type="text" />
            </div>

            <div className="md:hidden">
                <img src={menu} alt="menu-icon" />
            </div>
        </div>
    );
};

export default Header;
