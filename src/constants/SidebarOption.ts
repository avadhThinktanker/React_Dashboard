import Home from "../../public/svg/home-icon.svg"
import Notification from "../../public/svg/noti-icon.svg"
import Statistics from "../../public/svg/diagram-icon.svg"
import Favorites from "../../public/svg/heart-icon.svg"
import Subscribers from "../../public/svg/subscriber-icon.svg"
import Write from "../../public/svg/write.svg"

interface sidebaroptions {
    lable: string,
    src: string,
    path: string
}

export const sidebarOptions: sidebaroptions[] = [
    {
        src: Home,
        lable: "Home",
        path: "/home"
    },
    {
        src: Subscribers,
        lable: "Subscribers",
        path: "/subscibers"
    },
    {
        src: Notification,
        lable: "Notification",
        path: "/notification"
    },
    {
        src: Favorites,
        lable: "Favorites",
        path: "/favorites"
    },
    {
        src: Write,
        lable: "Write",
        path: "/write"
    },
    {
        src: Statistics,
        lable: "Statistics",
        path: "/statistics"
    },
]