
import { IconType } from "react-icons";
import { RiHome7Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { LuChartSpline } from "react-icons/lu";

interface sidebaroptions {
    lable: string,
    icon: IconType,
    path: string
}

export const sidebarOptions: sidebaroptions[] = [
    {
        icon: RiHome7Line,
        lable: "Home",
        path: "/home"
    },
    {
        icon: MdOutlinePersonOutline,
        lable: "Subscribers",
        path: "/subscibers"
    },
    {
        icon: IoMdNotificationsOutline,
        lable: "Notification",
        path: "/notification"
    },
    {
        icon: MdOutlineFavoriteBorder,
        lable: "Favorites",
        path: "/favorites"
    },
    {
        icon: CiFileOn,
        lable: "Write",
        path: "/write"
    },
    {
        icon: LuChartSpline,
        lable: "Statistics",
        path: "/statistics"
    },

]