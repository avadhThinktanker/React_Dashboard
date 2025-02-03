import { NavLink } from "react-router-dom";
import Input from "./search";
import UserProfile from "./user-profile";

const Header = () => {
    const userImage = "https://s3-alpha-sig.figma.com/img/ffff/033a/efe4bcb3cff75c23caf607a158d35fa6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E6MthrLiCt3E5UfYW~8hHbdMr8vwUnodvWHY4Ha0OMDRPlaKCx4r~fGJB62gHF5A7gN4rNYmNXrezSmjaQqaPYvuhJU0rZFmhgQ1DzWinnkmkzo0~MesIQ7X0vvXayGazP39oIQKJ87MQ5jA0QSrXc8Vew6~KBPSs4tXzfAIkqlF4v6TbX2r83tn-Es1eV4f7roExKO2x4KaKvZOujMve05rvGg5VxF7VuN69uth-~Lyg7yVawCGNwWBt5qS-1IC-~4BXz7CWQq1T-eUJGOoHJaJ3q-tOI9aYOfi0-YO9yZuR3nxJBBN7rDQuGaFlwM1Uo1WKivQvxJPA0wntargng__";

    return (
        <div className="flex p-4 justify-between items-center flex-wrap">
            <UserProfile
                userImg={userImage}
                userName="Avadh Raiyani"
                userClass="Game Tested. Athlete Approved."
            />
            <div className="flex gap-10 items-center flex-wrap justify-center space-x-6">
                <NavLink
                    to="/for-you"
                    className={({ isActive }) => isActive ? "text-blue-500 text-lg font-semibold" : "text-lg font-semibold hover:text-blue-500 transition-all"}
                >
                    For you
                </NavLink>
                <NavLink
                    to="/following"
                    className={({ isActive }) => isActive ? "text-blue-500 text-lg font-semibold" : "text-lg font-semibold hover:text-blue-500 transition-all"}
                >
                    Following
                </NavLink>
                <NavLink
                    to="/popular"
                    className={({ isActive }) => isActive ? "text-blue-500 text-lg font-semibold" : "text-lg font-semibold hover:text-blue-500 transition-all"}
                >
                    Popular
                </NavLink>
            </div>
            <Input type="text" />
        </div>
    );
};

export default Header;
